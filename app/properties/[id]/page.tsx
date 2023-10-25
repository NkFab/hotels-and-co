'use client'
import ContainerFrame from "@/components/Footer";
import Header from "@/components/Header";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { HotelsAndCo } from "../../services/request";
import { IProperty } from "@/components";



export default function Property({ params }: { params: { id: string } }) {
  const hotelsAndCo = new HotelsAndCo();
  const [property, setProperty] = React.useState<IProperty>()
  const fetch = async () => {
    const response = await hotelsAndCo.getOneProperty(params.id);
    return response.data;
  };

  const { data } = useQuery({
    queryKey: ['GET_ONE_PROPERTY', params.id],
    queryFn: () => hotelsAndCo.getOneProperty(params.id)
  })

  React.useEffect(() => {
    if (data) {
      setProperty(data)
    }
  }, [data])
  

  return (
    <main className="w-full flex flex-col items-center text-center text-[18px] text-gray-800 font-p14 border-b">
      <Header />

      <div className="bg-white w-full h-[68px] text-left px-20 py-10">
        <p className=" text-gray-800 font-normal text-[30px]">{property?.location} Getaway</p>
        <div className="w-full flex justify-between text-gray-800 text-sm">
          <p className=""> {property?.rating} . 7 reviews . location</p>
          <p className=""> Share . Save</p>
        </div>
      </div>
      <div className="w-full h-[400px] flex px-20 rounded-xl mt-10">
        <div className="self-stretch w-full rounded-2xl h-[400px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[8px]">
          <Image
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={property?.image as string}
            width={556}
            height={400}
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
              <Image
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/random/?car"
                width={274}
                height={196}
              />
              <Image
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/random/?car"
                width={274}
                height={196}
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[8px]">
              <Image
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/random/?car"
                width={274}
                height={196}
              />
              <Image
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="https://source.unsplash.com/random/?car"
                width={274}
                height={196}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-20 h-[60px] mt-10 text-left text-gray-800">
        <div className=" text-[24px] font-normal">
          Entire rental unit hosted by {property?.host_name} for ${property?.price} per night
        </div>
        <div className="text-sm ">
          2 guest . 1 bedroom . 1bed . 1 bath
        </div>
      </div>


      <ContainerFrame />
      </main>
  )
}
