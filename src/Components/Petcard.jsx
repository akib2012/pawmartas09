import React from "react";
import { Link, Navigate } from "react-router";

const Petcard = ({ data }) => {
/* 
  if(!data){
    return Navigate('/errorpage')
  } */
  return (
    <div>
      <div className="max-fit rounded-lg overflow-hidden  bg-white shadow-2xl hover:scale-103">
        <img
          className="w-full h-56 object-cover"
          src={data.image}
          alt="Winter Coat Fitting for Dogs"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">
           {data.serviceName}
          </h2>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="ml-2 text-gray-600">({data.rating})</span>
          </div>
          <p className="mt-2 text-gray-600">
           {data.providerName}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-gray-800">{data.price} $</span>
            <Link to={`/petdetails/${data.serviceId}`} className=" btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petcard;
