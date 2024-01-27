"use client";
import React, { useState } from "react";
import "./form.css";
import { useParams, useRouter } from "next/navigation";
import defaultAPI from "./../../../axiosIstance";
import { toast } from "react-hot-toast";

const Payment = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const url = `api/rests/${id}/order`;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, [2000]);
    defaultAPI.post(url).then((res) => {
      toast.success(res.data.message);
      setLoading(false);
      router.push("/home");
    });
  };
  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              طريقة الدفع{" "}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label
                  htmlFor="type1"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                    // required
                    checked
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    className="h-8 ml-3"
                    alt="Type 1"
                  />
                </label>
              </div>
              <div className="px-2">
                <label
                  htmlFor="type2"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                    className="h-8 ml-3"
                    alt="Type 2"
                  />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  required
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>

            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">
                Security code
              </label>
              <div>
                <input
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="000"
                  type="text"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                <i className="mdi mdi-lock-outline mr-1"></i>
                {loading ? "انتظر" : "ادفع"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
