import type { NextPage } from "next";
import FooterMenu from "./FooterMenu";

const Footer: NextPage = () => {

  const menuItems = [
    { item: "Popular", active: true },
    { item: "Historic", active: false },
    { item: "Coastal", active: false },
    { item: "Islands", active: false },
    { item: "Lakes", active: false },
    { item: "Unique stays", active: false },
    { item: "Categories", active: false },
    { item: "Things to do", active: false }
  ];

  const footerItems = [
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Flat rentals' },
    { title: 'Aberfeldy', subtitle: 'Villa rentals' },
    { title: 'Aberfeldy', subtitle: 'Flat rentals' },
    { title: 'Aberfeldy', subtitle: 'Cottage rentals' },
    { title: 'Aberfeldy', subtitle: 'Flat rentals' },
    { title: 'Aberfeldy', subtitle: 'Cottage rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Flat rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Villa rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Flat rentals' },
    { title: 'Aberfeldy', subtitle: 'House rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
    { title: 'Aberfeldy', subtitle: 'Holiday rentals' },
  ];


  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-end mt-[-4px] text-left text-3xl text-grey-400 font-p14 relative w-full bottom-0">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="w-full bg-grey-50 box-border flex flex-col py-12 px-20 items-start justify-start gap-[32px] border-b-[1px] border-solid border-grey-200">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[26px] flex items-center w-[303px]">
              Inspiration for future getaways
            </div>
            <div className="w-full self-stretch flex flex-row items-start justify-start gap-[20px] border-b-[1px] border-solid border-grey-200">
              {menuItems.map((menu, idx) => <div key={idx}><FooterMenu item={menu.item} active={menu.active} /></div>)}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-start">
                <div className="w-full grid grid-cols-5 gap-10">
                {footerItems.map((footer, idx) => (
                  <div key={idx}>
                    <div className="self-stretch relative leading-[18px] font-medium">
                      {footer.title}
                    </div>
                    <div className="self-stretch relative leading-[18px] text-grey-300">
                      {footer.subtitle}
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-grey-50 flex flex-col pt-12 px-20 pb-0 items-start justify-start gap-[48px] text-sm">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
              <div className="relative leading-[18px] font-medium">Support</div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Help centre</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">AirCover</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Anti-discrimination
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Disability support
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Cancellation options
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Report neighbourhood concern
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
              <div className="relative leading-[18px] font-medium">Hosting</div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Airbnb your home</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  AirCover for hosts
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Hosting resources</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Community forum</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Hosting responsibly
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
              <div className="relative leading-[18px] font-medium">Airbnb</div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Newsroom</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">New features</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Careers</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Investors</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">Gift cards</div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="relative leading-[18px]">
                  Airbnb.org emergency stays
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row py-6 px-0 items-start justify-between border-t-[1px] border-solid border-grey-200">
            <div className="w-[599px] flex flex-row items-center justify-start gap-[8px]">
              <div className="flex-1 relative leading-[18px]">
                © 2023 Hotels &  CO, nmf.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
