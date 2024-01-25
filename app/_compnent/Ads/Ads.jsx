"use client";
import { useEffect, useState } from "react";
import defaultAPI from "./../../axiosIstance";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

export default function Ads() {
  const [data, setData] = useState([]);
  const URL = "users/ads";
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
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data?.map((item) => (
          <SwiperSlide title={item?.title} key={item?.id}>
            {<img src={item?.image} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
