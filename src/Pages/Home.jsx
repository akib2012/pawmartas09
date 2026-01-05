import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import Herosection from '../Components/Herosection';
import PrtCards from '../Components/PetCards';
import Petcaretips from '../Components/Petcaretips';
import Vetcard from '../Components/Vetcard';
import Happyuser from '../Components/Happyuser';
import { Authcontext } from '../ContextAuth/Authcontext';

const Home = () => {

  /* const {loading} = useContext(Authcontext)

  if(loading){
    return <p>loading....</p>
  } */
    return (
        <div>
          <div>
            
            <Herosection></Herosection>
          </div>
          <div>
           <PrtCards></PrtCards>
          </div>
          <div>
             <Petcaretips></Petcaretips>
          </div>
          <div>
            <Vetcard></Vetcard>
          </div>

          <div>
            <Happyuser></Happyuser>
          </div>
        </div>
    );
};

export default Home;