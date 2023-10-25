"use client"
import { Carousel } from "flowbite-react";
import type { NextPage } from "next";
import Image from "next/image";
import moment from "moment";

export interface IProperty {
  id: string;
  image: string;
  location: string;
  host_name: string;
  from: Date;
  to: Date;
  price: string;
  rating: string;

};

const PropertyCard: NextPage<IProperty> =
  ({
    id,
    image,
    location,
    host_name,
    from,
    to,
    price,
    rating
  }) => {
    return (
      <div className="mt-5 mr-5 w-[302px] h-[388px] ">
        <Image
          className="rounded-lg bg-cover w-[302px] h-[284px]"
          src={image}
          alt=""
          width={302}
          height={284}
        />
        <div className="w-[302px] h-24 flex flex-row justify-between items-start mt-4">
          <div className="text-left">
            <p className=" text-sm font-semibold text-gray-800">{location}</p>
            <p className="text-xs text-gray-500 font-light">Hosted by {host_name}</p>
            <p className="text-xs text-gray-500 font-light">{moment(from).format('DD')} - {moment(to).format('DD MMM')}</p>
            <p className="text-xs text-gray-800 mt-2">
              <strong>${price?.toLocaleLowerCase()}</strong> / night
            </p>
          </div>
          <div className="flex flex-row items-center">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="text-xs">{rating}</p>
          </div>
        </div>
      </div>
    );
  }

export default PropertyCard;

