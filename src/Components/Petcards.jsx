import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Petcard from './Petcard';


const PrtCards = () => {

   const petsdata = useLoaderData();

   const carsdata  = petsdata.slice(0,6);
   

    
    return (
       <div>
         <div>
             <div>
              <h3 className='text-3xl md:text-4xl font-semibold text-center my-6 text-[#FFB347]'>Popular Winter Care Services</h3>
            </div>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000"  className='max-w-10/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
           
           {
            carsdata.map(data => <Petcard data={data} id={data.serviceId}></Petcard>)
           }
        </div>
        <div className='flex justify-center'>
         <Link to='/service'><button className='px-4 py-2 font-semibold text-[14px] rounded-3xl bg-[#FFB347]'>Show More Services</button></Link>
        </div>
       </div>
    );
};

export default PrtCards;