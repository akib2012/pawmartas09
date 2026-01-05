import React from "react";
import { useLoaderData } from "react-router";
import Petcard from "../Components/Petcard";

const Service = () => {
  const serviceCard = useLoaderData();
  // console.log(serviceCard);
  return (
    <div>
      <div className="mt-29">
        <h3 className="text-3xl md:text-4xl font-semibold text-center my-6 text-[#FFB347]">
          All Our Services
        </h3>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-w-10/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6"
      >
        {serviceCard.map((data) => (
          <Petcard data={data} id={data.serviceId}></Petcard>
        ))}
      </div>
    </div>
  );
};

export default Service;
