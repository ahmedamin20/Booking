"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import defaultAPI from "@/app/axiosIstance";

const Rests = () => {
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
  console.log(data, "Data");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "95%",
        flexWrap: "wrap",
      }}
    >
      {data?.map((item) => (
        <Card
          rating={item.rating}
          id={item.id}
          price={item.price}
          image={item.images[0]}
          key={item.id}
          title={item.name}
          space={item.space}
        />
      ))}
    </div>
  );
};

export default Rests;
