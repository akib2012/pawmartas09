import React from "react";
import Feedbackcatrtd from "./Feedbackcatrtd";

const Happyuser = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Pet Owner",
      rating: 4,
      message:
        "Pawfect Grooming did an amazing job with my golden retriever, Bella! She looked stunning after her grooming session.",
      image: "https://i.ibb.co.com/qYQ1QRFy/c1.jpg",
    },
    {
      name: "Mike Thompson",
      role: "Dog Dad",
      rating: 5,
      message:
        "The team at Pawfect Grooming is fantastic! They treated my dog, Max, with so much care and love.",
      image: "https://i.ibb.co.com/G4wKd6mx/c2.jpg",
    },
    {
      name: "Emily Davis",
      role: "Cat Owner",
      rating: 5,
      message:
        "I was so impressed with the grooming service for my cat, Whiskers. They made the experience stress-free!",
      image: "https://i.ibb.co.com/whLKC0RP/c3.jpg",
    },
    {
      name: "James Smith",
      role: "Pet Enthusiast",
      rating: 4,
      message:
        "Great service and friendly staff! My dog, Charlie, always comes out looking fabulous.",
      image: "https://i.ibb.co.com/XZWsZ2Ts/c4.jpg",
    },
    {
      name: "Linda Brown",
      role: "Pet Lover",
      rating: 5,
      message:
        "Pawfect Grooming is the best! They really know how to pamper pets. My dog, Daisy, loves her grooming days.",
      image: "https://i.ibb.co.com/tpcXSVS7/c5.jpg",
    },
    {
      name: "Robert Wilson",
      role: "Satisfied Customer",
      rating: 5,
      message:
        "I highly recommend Pawfect Grooming! They did a wonderful job on my poodle, Coco, and she was so happy afterward.",
      image: "https://i.ibb.co.com/149QNdM/c6.jpg",
    },
  ];
  return (
    <div data-aos="zoom-in-left" className="py-12 px-4 md:px-10 bg-white max-w-10/12 mx-auto ">
      <h2 className="text-3xl md:text-4xl text-[rgb(255,179,71)] font-bold text-center mb-4">Happy Clients</h2>
      <p className="text-center text-gray-600 mb-10">
        Our customers love us! Here’s what they say about their experience.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <Feedbackcatrtd
            key={index}
            name={t.name}
            role={t.role}
            rating={t.rating}
            message={t.message}
            image={t.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Happyuser;
