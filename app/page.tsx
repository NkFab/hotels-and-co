'use client'
import MainHeader from "@/components/MainHeader";
import ContainerFrame from "@/components/Footer";
import Header from "@/components/Header";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { HotelsAndCo } from "./services/request";
import PropertyCard, { IProperty } from "@/components/PropertyCard";
import Link from "next/link"



export default function Home() {
  const hotelsAndCo = new HotelsAndCo();
  
  const [currentPageData, setCurrentPageData] = React.useState<IProperty[]>([]);
  const fetch = async (p: number) => {
    const response = await hotelsAndCo.getProperties(p, 10);
    return response.data; 
  };


  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['PROPRTIES_LISTING'],
    queryFn: ({ pageParam = 1 }) => {
      if (isNaN(pageParam)) {
        console.error('Invalid pageParam:', pageParam);
      }
      return fetch(pageParam);
    },
    getNextPageParam: (_, allPages) => allPages?.length + 1,
    getPreviousPageParam: (_, allPages) => allPages.length - 1,
    initialPageParam: 1,
  });


  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      fetchNextPage();
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  React.useEffect(() => {
    if (data) {
      const pageData = data.pages.flatMap((page) =>
        page.map((item: IProperty) => item)
      );

      setCurrentPageData((prevData) => [...prevData, ...pageData]);
    }
  }, [data]);


  function getRandomNumber() {
    const min = 1;
    const max = 5;
    const decimalPlaces = 1;

    const randomValue = Math.random() * (max - min) + min;
    return randomValue.toFixed(decimalPlaces);
  }

  return (
    <main className="w-full flex flex-col items-center text-center text-[18px] text-gray-800 font-p14">
      <Header />
      <MainHeader />
      <div className="w-full grid grid-cols-4 gap-3 px-20 mt-[10%]">
        {currentPageData.map((item: IProperty, _index) => {
          return (
              <Link href="/properties/[id]" as={`/properties/${item.id}`} key={_index} >
                <PropertyCard
                  id={item.id}
                  image={item.image}
                  location={item.location}
                  from={item.from}
                  to={item.to}
                  host_name={item.host_name}
                  price={item.price}
                  rating={getRandomNumber()}
                />
              </Link>
          );
        })}
      </div>
      {isFetchingNextPage
        ? 'Load more'
        : hasNextPage
          ? 'Loading more...'
          : 'We reached the end'}
      <ContainerFrame />
    </main>

  );
}
