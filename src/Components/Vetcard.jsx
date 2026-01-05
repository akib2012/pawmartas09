import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

const Vetcard = () => {
  const slideData = [
    {
      id: 1,
      name: "Dr. John Doe",
      image: "https://i.ibb.co.com/SDygmhxc/vet03.webp",
      details:
        "Specialist in Veterinary Medicine with 10+ years of experience.",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      image: "https://i.ibb.co.com/sdqpmzDP/vetr01.webp",
      details: "Expert in pet nutrition and holistic wellness.",
    },
    {
      id: 3,
      name: "Dr. Alex Brown",
      image: "https://i.ibb.co.com/Xf23jcwM/vwr02.webp",
      details: "Focuses on preventive care and pet vaccinations.",
    },
    // Add more entries as needed
  ];

  return (
    <div
      data-aos="zoom-out-right"
      className="max-w-[90%] md:max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-10 my-10 md:my-16 px-4"
    >
      {/* Swiper Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{ clickable: true }}
            modules={[Mousewheel, Pagination]}
            className="h-[340px] sm:h-[400px] md:h-[440px] lg:h-[430px]"
          >
            {slideData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col justify-start items-center w-full px-4 py-4 text-center">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full rounded-lg shadow-md mb-4 object-cover max-h-[200px] sm:max-h-[250px] md:max-h-[300px]"
                  />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {slide.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 w-full md:max-w-md break-words">
                    {slide.details}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl text-[rgb(255,179,71)] mb-6 md:mb-8">
          Meet Our Expert Vets
        </h4>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0 text-justify">
          We’re a passionate, friendly, and dedicated team of vets, nurses, and
          support staff who are here to provide exceptional care for you and
          your pets. As a locally owned practice, we’re proud to offer a
          personal, community-focused approach to veterinary care, where
          relationships matter and every animal is treated like one of our own.
        </p>
      </div>
    </div>
  );
};

export default Vetcard;
