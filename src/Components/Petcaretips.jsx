import React from "react";

import carepetimg from "../assets/petcare.png";

const Petcaretips = () => {
  return (
   <div
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
  className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 max-w-[90%] md:max-w-6xl mx-auto my-10 px-4"
>
  {/* Text Section */}
  <div className="w-full md:w-1/2 mt-6 md:mt-0">
    <div className="text-left">
      <h3 className="text-2xl sm:text-3xl font-semibold my-4 text-[#FFB347]">
        Winter Care Tips for Pets
      </h3>

      {/* Tip 1 */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-bold block mb-1">
            1. Choose appropriate clothing for your pet
          </span>
          Not all pets can keep themselves warm, so proper winter clothing is
          essential. Pick cozy, well-fitted clothes suited to your pet’s size and breed.
        </p>
      </div>

      {/* Tip 2 */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-bold block mb-1">2. Avoid getting a haircut</span>
          Pets with long hair rely on their coat for warmth in winter.
          Skip grooming sessions that involve trimming their fur during cold months.
        </p>
      </div>

      {/* Tip 3 */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-bold block mb-1">
            3. Keep changing the water in their bowl
          </span>
          Water can get too cold, discouraging your pet from drinking.
          Replace chilled water with lukewarm water regularly to avoid dehydration.
        </p>
      </div>

      {/* Tip 4 */}
      <div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <span className="font-bold block mb-1">
            4. Arrange for a warm and cozy bedding
          </span>
          Cold floors can be harsh, so give your pet a thick, warm bed.
          Ensure their sleeping area is draft-free and comfortable.
        </p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={carepetimg}
      alt="Winter Pet Care"
      className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg object-cover"
    />
  </div>
</div>

  );
};

export default Petcaretips;
