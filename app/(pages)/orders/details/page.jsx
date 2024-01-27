"use client";

import defaultAPI from "@/app/axiosIstance";
import { useEffect, useState } from "react";

const OrdersDetails = () => {
  const [data, setData] = useState([]);
  const URL = "api/orders";
  useEffect(() => {
    const fetchData = async () => {
      defaultAPI.get(URL).then((res) => {
        setData(res.data.data);
      });
      // return x;
    };
    fetchData();
  }, []);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Orders
        </h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Your Orders
            </p>
            {data?.map((item) => (
              <div
                key={item.id}
                className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
              >
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={item?.rest?.images[0]}
                    alt="dress"
                  />
                  <img
                    className="w-full md:hidden"
                    src={item?.rest?.images[1]}
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-80 flex flex-col justify-start items-start space-y-4">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      {item?.rest?.name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">ID: </span>{" "}
                        {item?.rest.id}
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">space: </span>{" "}
                        {item?.rest.space} Meter
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-evenly space-x-4  w-full">
                    <p className="text-base xl:text-lg leading-6 text-black">
                      {item?.rest?.description}
                    </p>

                    <p className="text-base xl:text-lg font-semibold leading-6 text-green-600">
                      {item.price}ريال
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetails;
