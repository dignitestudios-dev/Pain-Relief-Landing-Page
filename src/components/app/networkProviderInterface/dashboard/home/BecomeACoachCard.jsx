import Button from "../../../landingPage/Inputs/Button";
import { BecomeCoach } from "../../../../../assets/export";

const BecomeACoachCard = ({ handleRequestSend, requestloader, userData }) => {
  console.log(userData,"userData==>")
  return (
    <div className="w-full flex justify-center my-6 ">
      <div className="bg-white  lg:w-[90%] md:w-[90%] w-[90%] grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-6 rounded-[12px] p-6 shadow-sm">
        <div>
          <h2 className="text-[28px] lg:text-[32px] font-semibold mb-2">
            Become a Pain Relief Coach
          </h2>
          <p className="text-[16px] font-normal mb-4">
            Join our team of Pain Relief Coaches and play a vital role in
            guiding patients through their chiropractic journey. Help users find
            the right care, answer queries, and ensure a seamless experience —
            all while expanding your impact as a provider.
          </p>
          {userData.painReliefCoachRequested ? null : (
            <div className="w-[239px]">
              <Button
                text={"Send Request"}
                onClick={handleRequestSend}
                loading={requestloader}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <img
            src={BecomeCoach}
            className="w-full max-w-[517px] h-auto"
            alt="Become a Coach"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeACoachCard;
