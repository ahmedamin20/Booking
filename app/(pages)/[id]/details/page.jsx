"use client";

import defaultAPI from "@/app/axiosIstance";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const RestDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState([]);
  const URL = "api/rests";
  useEffect(() => {
    const fetchData = async () => {
      defaultAPI.get(URL).then((res) => {
        setData(res.data.data);
      });
      // return x;
    };
    fetchData();
  }, []);
  const item = data?.find((item) => item.id == id);

  const handlePrevImage = () => {
    console.log("prev");

    setCurrentImageIndex(
      currentImageIndex > 0 ? currentImageIndex - 1 : currentImageIndex
    );
  };
  const handleNextImage = () => {
    console.log("next");
    setCurrentImageIndex(
      currentImageIndex < item?.images?.length - 1
        ? currentImageIndex + 1
        : currentImageIndex
    );
  };
  return (
    <section className="py-10 font-poppins ">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                <a
                  className="absolute left-0 hover:cursor-pointer transform lg:mr-8 top-1/2 translate-1/2"
                  // href="#"
                  onClick={handlePrevImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-900 bi bi-chevron-left "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    ></path>
                  </svg>
                </a>
                <img
                  className="object-contain w-[500px] h-[400px] w-full lg:h-full"
                  src={item?.images[currentImageIndex]}
                  alt=""
                />
                <a
                  className="absolute right-0 hover:cursor-pointer transform lg:ml-8 top-1/2 translate-1/2"
                  // href="#"
                  onClick={handleNextImage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 ml-4 bi bi-chevron-right "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="flex-wrap hidden -mx-2 md:flex">
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      onClick={() => setCurrentImageIndex(1)}
                      className="object-contain w-full lg:h-28"
                      src={item?.images[1]}
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      onClick={() => setCurrentImageIndex(2)}
                      className="object-contain w-full lg:h-28"
                      src={item?.images[2]}
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      onClick={() => setCurrentImageIndex(0)}
                      className="object-contain w-full lg:h-28"
                      src={item?.images[0]}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <h2
                  dir="rtl"
                  className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-900 md:text-2xl dark:text-gray-900"
                >
                  <span style={{ fontWeight: "bold", fontsize: "30px" }}>
                    {item?.name}
                  </span>
                  <hr style={{ margin: "1rem" }} />
                  <span style={{ fontWeight: "lighter", fontsize: "20px" }}>
                    {item?.description}
                  </span>
                </h2>
                <div className="flex flex-wrap items-center mb-6"></div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  <span>{item?.price}ريال</span>
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <Link
                  // href={"/"}
                  href={`order`}
                  className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl"
                >
                  احجز الان
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestDetails;
