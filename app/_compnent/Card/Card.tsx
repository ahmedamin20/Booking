import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface cardProps {
  title: string;
  price: number;
  image: string;
  space: string;
  rating: number;
  id: number;
}
const Card = ({ space, image, price, title, id }: cardProps) => {
  return (
    <Link href={`${id}/details`}>
      <div className="w-full my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-400 dark:border-gray-400">
        <a href="#">
          <Image
            width={500}
            height={500}
            className="p-8 rounded-t-lg w-[500px] h-[400px]"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {price} ريال
            </span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {space}متر
            </span>
            <Link href={`${id}/details`}>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                احجز الان
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
