import type { NextPage } from "next";
import Nav from "./Nav";
import Image from "next/image";

const MainHeader: NextPage = () => {

  const menu = [
    {
      icon: "/icon@2x.png",
      text: "Amazing views",
      href: '/'
    },
    {
      icon: "/icon1@2x.png",
      text: "Cabins",
      href: "/cabins"
    },
    {
      icon: "/icon2@2x.png",
      text: "Beachfront",
      href: "/beach-front"
    },
    {
      icon: "/icon3@2x.png",
      text: "Skiing",
      href: "/skiing"
    },
    {
      icon: "/icon4@2x.png",
      text: "Grand pianos",
      href: "/grand-pianos"
    },
    {
      icon: "/icon5@2x.png",
      text: "Mansions",
      href: "/mansions"
    },
    {
      icon: "/icon6@2x.png",
      text: "OMG!",
      href: "/omg"
    },
    {
      icon: "/icon7@2x.png",
      text: "Amazing pools",
      href: "/amazing-pools"
    },
    {
      icon: "/icon8@2x.png",
      text: "Luxe",
      href: "/luxe"
    },
    {
      icon: "/icon9@2x.png",
      text: "Boats",
      href: "/boats"
    },
    {
      icon: "/icon10@2x.png",
      text: "Lakefront",
      href: "/lake-front"
    },
    {
      icon: "/icon11@2x.png",
      text: "Treehouses",
      href: "/tree-houses"

    },
  ];
  return (
    <div className="w-full bg-white h-[82px] flex py-0 px-20 items-center justify-around border-t fixed top-20">
      <div className="flex items-start gap-[32px]">
        {menu.map((item, index) => (
          <Nav
            key={index}
            icon={item.icon}
            text={item.text}
            href={item.href}
          />
        ))}
  
        <div className="flex h-12 flex flex-row items-center justify-start cursor-pointer">
          <div className="rounded-sm bg-white box-border w-7 h-7 flex flex-row p-[7px] items-center justify-center border-[1px] border-solid border-grey-200">
            <div className="self-stretch w-3 flex flex-col py-[1.5px] pr-[3.155303478240967px] pl-[4.5px] box-border items-start justify-start">
              <Image
                className="relative"
                alt=""
                src="/vector.svg"
                width={5.6}
                height={10.1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[62px] flex flex-col items-center justify-start cursor-pointer">
        <div className="rounded-lg bg-white box-border h-12 flex flex-row py-3.5 px-4 items-center justify-start gap-[8px] border-[1px] border-solid border-grey-200">
          <div className="w-3.5 h-3.5 overflow-hidden shrink-0 flex flex-col pt-[1.7499996423721313px] px-[1.75px] pb-[1.7499994039535522px] box-border items-start justify-start">
            <Image
              className="relative"
              alt=""
              src="/vector1.svg"
              width={10.5}
              height={10.5}
            />
          </div>
          <div className="leading-[16px] font-medium">Filters</div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
