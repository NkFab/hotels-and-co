import type { NextPage } from "next";
import Image from "next/image";

const SearchHeader: NextPage = () => {
    return (
      <div
        className="rounded-3xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.08),_0px_4px_12px_rgba(0,_0,_0,_0.05)] flex flex-row p-2 items-center justify-start text-left text-sm text-grey-400 font-p14 border-[1px] border-solid border-grey-200" 
      >
        <div
          className="flex flex-row items-start justify-start"
        >
          <div className="flex flex-row py-0 px-4 items-center justify-center border-r-[1px] border-solid border-grey-200">
            <div className="relative leading-[22px] font-medium cursor-pointer">Anywhere</div>
          </div>
          <div className="flex flex-row py-0 px-4 items-center justify-center border-r-[1px] border-solid border-grey-200">
            <div className="relative leading-[22px] font-medium cursor-pointer">Any week</div>
          </div>
          <div className="flex flex-row py-0 px-4 items-center justify-center text-grey-300">
            <input type="text" placeholder="Add guests..." className="relative leading-[22px] focus:outline-none" />
          </div>
        </div>
        <button className="rounded-2xl bg-primary flex flex-row p-2.5 items-start justify-start cursor-pointer">
          <div className="w-3 h-3 flex flex-col py-[0.75px] pr-[0.7499998807907104px] pl-[0.7500001192092896px] box-border items-start justify-start">
            <Image
              className="relative w-[12.2px] h-[12.2px]"
              alt=""
              src="/vector2.svg"
              height={12.2}
              width={12.2}
            />
          </div>
        </button>
      </div>
    );
  };

export default SearchHeader;
