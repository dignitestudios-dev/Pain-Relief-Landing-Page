import ClinicProfile from "../../landingPage/providerdetail/ClinicProfile";

const BookProviderDetailSection = ({ providerDetail, loading, provider }) => {
  console.log("🚀 ~ BookProviderDetailSection ~ provider:", provider);
  return (
    <div className="flex flex-col xl:px-20 lg:px-14  md:px-10 px-8 mb-10">
      <ClinicProfile providerDetail={providerDetail} loading={loading} />
    </div>
  );
};

export default BookProviderDetailSection;
