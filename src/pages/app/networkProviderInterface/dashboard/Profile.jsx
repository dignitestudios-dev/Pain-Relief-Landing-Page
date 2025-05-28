import { useState } from "react";
import HeroSection from "../../../../components/app/networkProviderInterface/dashboard/profile/HeroSection";
import ProfileDetailSection from "../../../../components/app/networkProviderInterface/dashboard/profile/ProfileDetailSection";
import {
  useProviderProfile,
  useReferralCodeProvider,
  useReferralFriendsProvider,
  useTherapyType,
} from "../../../../hooks/api/Get";
import AddNewLocationModal from "../../../../components/onboarding/AddNewLocationModal";
import { useAccountRequest, useSendRequest } from "../../../../hooks/api/Post";
import { processSendRequest, processUploadLicese } from "../../../../lib/utils";
import LicenseApprovedModal from "../../../../components/app/networkProviderInterface/dashboard/profile/LicenseApprovedModal";
import RefferalQrCodeModal from "../../../../components/app/networkProviderInterface/dashboard/profile/RefferalQrCodeModal";
import RequestSendModal from "../../../../components/app/networkProviderInterface/dashboard/home/RequestSendModal";
import EditLocationModal from "../../../../components/onboarding/EditLocationModal";
import ApprovedPending from "../../../../components/app/networkProviderInterface/dashboard/profile/ApprovedPending";

const Profile = () => {
  const [requestModal, setRequestModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isEditModal, setIsEditModall] = useState(false);
  const [licenseModal, setLicenseModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [voucherModal, setVoucherModal] = useState(false);
  const [isLocationAdded, setIsLocationAdded] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pendingModal, setPendingModal] = useState(false);

  const { data: therapyTypes, loading: loading } =
    useTherapyType(`/booking/services`);

  const therapyTypesOption = therapyTypes?.map((item) => ({
    id: item?._id,
    label: item?.name,
  }));

  const { data: ProfileData, loading: loader } = useProviderProfile(
    "/provider/get-profile",
    update,
    setIsLocationAdded
  );

  const { data: ReferralFriends, loading: referralLoader } =
    useReferralFriendsProvider("/provider/get-refferal-provider");

  const { data: ReferralCode, loading: referralCodeLoader } =
    useReferralCodeProvider("/provider/generate-refferal-link");

  const { loading: licenseloader, postData } = useAccountRequest();

  const handleUploadLicense = () => {
    if (!selectedFile) return;

    const formData = new FormData();

    formData.append("addresses", JSON.stringify([]));

    formData.append("documents", selectedFile);

    postData(
      "/provider/add-details",
      formData,
      processUploadLicese,
      setLicenseModal,
      setPendingModal,

      setUpdate
    );
  };

  const { loading: requestloader, postData: postRequestData } =
    useSendRequest();

  const handleRequestSend = () => {
    postRequestData(
      "/provider/request-pain-relief",
      null,
      processSendRequest,
      setRequestModal,
      setUpdate
    );
  };

  return (
    <div>
      <HeroSection profileData={ProfileData} loader={loader} />
      <ProfileDetailSection
        profileData={ProfileData}
        setIsModal={setIsModal}
        setIsEditModall={setIsEditModall}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        handleUploadLicense={handleUploadLicense}
        setLicenseModal={setLicenseModal}
        ReferralFriends={ReferralFriends}
        referralLoader={referralLoader}
        setVoucherModal={setVoucherModal}
        loader={loader}
        handleRequestSend={handleRequestSend}
      />

      {isModal && (
        <AddNewLocationModal
          isBtn={true}
          setIsModal={setIsModal}
          setIsLocationAdded={setIsLocationAdded}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          isLocationAdded={isLocationAdded}
          therapyTypesOption={therapyTypesOption}
          setUpdate={setUpdate}
        />
      )}
      {isEditModal && (
        <EditLocationModal
          setIsModal={setIsEditModall}
          setIsLocationAdded={setIsLocationAdded}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          isLocationAdded={isLocationAdded}
          therapyTypesOption={therapyTypesOption}
          setUpdate={setUpdate}
        />
      )}
      {licenseModal && (
        <LicenseApprovedModal
          onClick={() => setLicenseModal(false)}
          setLicenseModal={setLicenseModal}
          setFile={setSelectedFile}
          handleUploadLicense={handleUploadLicense}
          licenseloader={licenseloader}
        />
      )}
      {voucherModal && (
        <RefferalQrCodeModal
          onClick={() => setVoucherModal(false)}
          referralCode={ReferralCode}
        />
      )}
      {requestModal && (
        <RequestSendModal onClick={() => setRequestModal(false)} />
      )}
      {pendingModal && (
        <ApprovedPending onClick={() => setPendingModal(false)} />
      )}
    </div>
  );
};

export default Profile;
