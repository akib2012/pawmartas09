import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import pet1 from "../assets/pet1.jpg";
import pet2 from "../assets/pet02.webp";
import pet3 from "../assets/pet03.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Herosection = () => {
  return (
    <div className="max-w-10/12 mx-auto mt-29">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full max-w-5xl mx-auto rounded-xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src={pet1}
              alt="Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <h2 className="text-white text-3xl font-bold text-center">
               <p className="text-[#FFB347]">Happy Grooming</p>
               <p className="text-xl text-[#87CEFA]">Professional grooming services for your pet.</p>
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img
              src={pet2}
              alt="Mountain"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <h2 className="text-white text-3xl font-bold">
                <p className="text-[#FFB347]">Vet Checkup</p>
               <p className="text-xl text-[#87CEFA]">Regular health checks keep pets healthy.</p>
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px]">
            <img src={pet3} alt="City" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold text-center">
                <p className="text-[#FFB347]">Play Time</p>
               <p className="text-xl text-[#87CEFA]">Safe toys and play areas for all breeds..</p>
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Herosection;
