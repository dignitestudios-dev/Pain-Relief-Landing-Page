import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";
import { ProfileImg } from "../../../../../assets/export";
import Button from "../../../landingPage/Inputs/Button";
import { SkeletonProviderDetail } from "../../../../global/Sekelton";

const HeroSection = ({ profileData, loader }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[550px]">
      <div className="bg-provider-detail h-[300px] w-full" />

      <div className="flex justify-center lg:-mt-20 md:-mt-16 -mt-40">
        <div className="w-[90%]">
          <div
            className="flex items-center text-white mb-3 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack size={18} />
            <h2 className="text-[19px] font-semibold ml-1">Back</h2>
          </div>

          {loader ? (
            <SkeletonProviderDetail />
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl p-4 lg:p-10 gap-6">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="p-[2px] rounded-full bg-gradient-to-r from-[#63CFAC] to-[#29ABE2] w-[130px] h-[130px]">
                  <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <img
                      src={
                        profileData?.profilePicture
                          ? profileData.profilePicture
                          : ProfileImg
                      }
                      className="w-[120px] h-[120px] rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h2 className="text-[24px] lg:text-[32px] font-semibold text-black">
                    {profileData?.name}
                  </h2>
                  <p className="text-[16px] lg:text-[18px] text-[#565656]">
                    {profileData?.email}
                  </p>
                </div>
              </div>

              <div className="w-[214px]">
                <Button
                  text={"Edit Profile"}
                  onClick={() =>
                    navigate("/provider/edit-profile-netwrok-provider", {
                      state: profileData,
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
