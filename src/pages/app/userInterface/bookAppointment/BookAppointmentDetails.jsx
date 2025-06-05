import BookProviderDetailSection from "../../../../components/app/userInterface/bookAppointment/BookProviderDetailSection";
import ProviderDetailHeroSection from "../../../../components/app/userInterface/bookAppointment/ProviderDetailHeroSection";
import { useLocation, useParams } from "react-router";
import { useDetailProvider } from "../../../../hooks/api/Get";

const BookAppointmentDetails = () => {
  const { id: providerDetail } = useParams();
  const location = useLocation();
  const provider = location.state?.provider;

  const { data, loading } = useDetailProvider(
    `/provider/details`,
    providerDetail
  );
  return (
    <div>
      <ProviderDetailHeroSection providerDetail={data} loading={loading} />
      <BookProviderDetailSection
        providerDetail={data}
        loading={loading}
        provider={provider}
      />
    </div>
  );
};

export default BookAppointmentDetails;
