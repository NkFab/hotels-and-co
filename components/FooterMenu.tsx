import type { NextPage } from "next";

type ActiveNoType = {
  item: string,
  active: boolean 
};

const FooterMenu: NextPage<ActiveNoType> =
  ({
    item,
    active
  }) => {

    return (
      <div
        className={` flex flex-col items-center justify-between gap-[14px] text-center text-sm text-grey-300 font-p14 ${active && 'text-[#222] border-black border-b-2'}`}
      >
        <div
          className=" leading-[18px] font-medium"
        >
          {item}
        </div>
        <div
          className={`self-stretch relative bg-grey-200 h-0.5 opacity-[0] ${active && 'bg-[#222]'}`}
        />
      </div>
    );
  };

export default FooterMenu;
