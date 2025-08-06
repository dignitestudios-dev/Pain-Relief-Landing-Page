import EmptyScreen from "../../../global/EmptyScreen";
import { useNavigate } from "react-router";
import { SkeletonProviderCard } from "../../../global/Sekelton";
import Button from "../../landingPage/Inputs/Button";
const ServiceProviderCards = ({ providerData, loading }) => {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <SkeletonProviderCard />
      ) : providerData.length === 0 ? (
        <div className="flex justify-center h-[400px] items-center w-full">
          <EmptyScreen
            text={
              "No results match your filters. Try adjusting them to see more options"
            }
          />
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 ">
          {providerData?.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white p-2 rounded-[14px] mx-2 xxl:w-[379px] xxl:h-[379px] w-[279px] flex flex-col justify-between min-h-[310px]"
            >
              <div className="bg-cards  h-24 flex items-center justify-center rounded-md">
                <div className="bg-gradient-to-l from-[#29ABE2] to-[#63CFAC] p-[3px] rounded-full relative top-6  ">
                  <img
                    src={item?.provider?.profilePicture}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full bg-white"
                  />
                </div>
              </div>
              <div className="text-center p-4">
                <h3 className="text-[16px] font-[600] text-[#181818] ">
                  {item?.provider?.name}
                </h3>
                <p className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] bg-clip-text text-transparent text-[14px] font-[500] ">
                  {item?.services?.flatMap((item) => item?.name).join(", ")}
                </p>
                <div className="flex  justify-center  gap-2">
                  <div>
                    <img
                      src={Location}
                      className="w-[13px] mt-1 h-[15.69px] object-contain  "
                      alt=""
                    />
                  </div>
                  <div className="text-[#181818] break-words whitespace-normal text-center text-[14px]  font-[500] ">
                    {" "}
                    {item?.address}
                  </div>
                </div>
                <p className="text-[#565656] text-[14px] font-[500] mt-1">
                  {item?.distanceInMiles} Miles Away
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[200px]  relative top-5 ">
                  <Button
                    text={"Book Now"}
                    onClick={() =>
                      navigate(`/user/appointmentDetailSection/${item?._id}`, {
                        state: {
                          provider: item,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ServiceProviderCards;
