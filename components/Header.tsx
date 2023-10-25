import type { NextPage } from "next";
import Image from 'next/image';
import SearchHeader from "./SearchHeader";

const Header: NextPage = () => {
  return (
    <nav className="w-full bg-white shadow-[0px_1px_0px_rgba(0,_0,_0,_0.08)] h-20 flex py-0 px-20 items-center justify-around fixed">
      <div className="w-[250px] h-[155.83px] flex flex-col items-start justify-center">
        <Image
          className=" shrink-0 object-fit"
          alt=""
          src="logo.svg"
          width={250}
          height={155.83}
        />
      </div>
      <SearchHeader />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <div className="relative rounded-xl h-10 flex flex-row p-3 box-border items-center justify-center text-left text-sm text-grey-400 font-p14">
            <div className="relative leading-[22px] font-medium">
              Airbnb your home
            </div>
          </div>
          <div
            className="rounded-xl h-10 flex flex-row p-3 items-center justify-center ml-[-4px]"
          >
            <div className="w-4 h-4 overflow-hidden shrink-0 flex flex-col py-[0.25px] pr-[0.24999332427978516px] pl-[0.25px] items-start justify-start">
              <Image
                className="relative"
                alt=""
                src="/vector3.svg"
                width={15.5}
                height={15.5}
              />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white flex flex-row py-1.5 pr-1.5 pl-3 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-200">
          <Image
            className="relative overflow-hidden shrink-0"
            alt=""
            src="/menu01.svg"
            width={16}
            height={16}
          />
          <div className="w-[30px] overflow-hidden shrink-0 flex flex-col pt-[0.65625px] pb-[0.6562519073486328px] pr-[0.6562519073486328px] pl-[0.65625px] items-start justify-start">
            <Image
              className="relative"
              alt=""
              src="/vector4.svg"
              width={28.7}
              height={28.7}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
