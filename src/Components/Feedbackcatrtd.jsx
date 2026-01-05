import React from "react";

const Feedbackcatrtd = ({ name, role, message, image, rating }) => {
  return (
    <div>
      <div className="bg-orange-400 text-white p-6 rounded-md shadow-md">
        {/* Star Rating */}
        <div className="mb-4 text-white text-xl">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>

        {/* Message */}
        <p className="mb-6 text-white">{message}</p>

        {/* User Info */}
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbackcatrtd;
