import HeroSection from "../../../components/app/landingPage/providerdetail/HeroSection";
import DetailSection from "../../../components/app/landingPage/providerdetail/DetailSection";
import { useLocation, useParams } from "react-router";
import { useDetailProvider } from "../../../hooks/api/Get";

const ProviderDetail = () => {
  const { id: providerDetail } = useParams();
  const location = useLocation();

  const { data, loading } = useDetailProvider(
    `/provider/details`,
    providerDetail
  );
  return (
    <div>
      <HeroSection providerDetail={data} loading={loading} />
      <DetailSection providerDetail={data} loading={loading} />
    </div>
  );
};

export default ProviderDetail;
