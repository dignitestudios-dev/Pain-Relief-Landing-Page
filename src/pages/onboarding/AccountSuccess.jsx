import { SideImg, SmallTick } from "../../assets/export";

const AccountSuccess = ({ onClick }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div className="p-4 lg:block hidden">
        <img className="xxl:w-[1200px] xl:w-[1000px] w-full" src={SideImg} />
      </div>
      <div className="flex flex-col justify-center items-center lg:h-auto h-screen ">
        <div className="pb-4 text-center xxl:w-[430px] lg:w-[330px] w-[420px] flex flex-col justify-center items-center">
          <div className=" mb-8">
            <img src={SmallTick} />
          </div>
          <p className="lg:text-[32px] text-[32px]  font-semibold capitalize">
            Account Created Successfully
          </p>
        </div>

        <button
          type="button"
          onClick={onClick}
          className="bg-gradient-to-l to-[#63CFAC] from-[#29ABE2] text-white xxl:w-[430px] w-[350px] xxl:h-[58px] h-[48px] rounded-[8px] mt-6"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AccountSuccess;
