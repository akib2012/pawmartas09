import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const Petcaredetils = () => {
  const { id } = useParams();
  // console.log(id)
  const cardsdata = useLoaderData();
  // console.log(cardsdata);

  const filtedata = cardsdata.find((data) => String(data.serviceId) === id);
  // console.log(filtedata);



  /* hadndle form for order */

  const handaleorderform = (e) =>{
    e.preventDefault();
     e.target.reset(); 
    toast.success(" Booking Successful!")

  }




  return (
    <div data-aos="zoom-in" className="mx-5 md:mx-1 max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border md:mx-auto my-10 flex flex-col md:flex-row transition-all duration-300 mt-34">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={filtedata.image}
          alt={filtedata.serviceName}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col justify-between md:w-1/2 w-full">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            {filtedata.serviceName}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            by {filtedata.providerName}
          </p>
          <p className="text-gray-600 mt-4">{filtedata.description}</p>

          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-semibold text-indigo-600">
              ${filtedata.price || 22}
            </span>
            <span className="text-sm text-gray-500">
              ⭐ {filtedata.rating || 4.8}
            </span>
          </div>

          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <span className="block">
              Slots Available: {filtedata.slotsAvailable || 8}
            </span>
            <span className="block">
              Category: {filtedata.category || "Comfort"}
            </span>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handaleorderform}  className="mt-6 space-y-3">
          <input
            type="text"
            placeholder="Name"
           
            className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            
            
            className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Petcaredetils;
