
'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

import type { NextPage } from 'next';
import Image from 'next/image';

type Props = {
  href: string; 
  icon: string;
  text?: string;
};

const Nav: NextPage<Props> =
  ({
    href, 
    icon,
    text
  }) => {
    const pathName = usePathname();

    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
      setIsActive(pathName === href || (href === '/' && pathName === '/'));
    }, [pathName, href]);

    const linkClass = isActive ? 'border-b text-gray-800' : '';


    return (
      <Link href={href} defaultValue="/" legacyBehavior>
        <a className={`flex flex-col items-start justify-start gap-[12px] text-center text-xs font-p14 no-underline ${linkClass}`}>
          <div className="flex flex-col items-center justify-start gap-[8px]">
            <div className="w-6 h-6 opacity-[0.64]">
              <Image
                className=" h-full w-full max-w-full max-h-full"
                alt=""
                src={icon}
                width={24}
                height={24}
              />
            </div>
            <div className="relative leading-[16px] text-grey-300 no-underline">
              {text}
            </div>
          </div>
          <div className={`self-stretch relative bg-grey-200 h-0.5 opacity-[0]${linkClass}`} />
        </a>
      </Link>
    );
  };

export default Nav;
