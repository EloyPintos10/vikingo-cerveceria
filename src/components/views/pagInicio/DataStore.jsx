import React from 'react';
import {TbTruck} from "react-icons/tb";
import {IoCardSharp} from "react-icons/io5"
import{BsWhatsapp} from "react-icons/bs"

const DataStore = () => {
    return (
       <div className='DataStore mb-4 mt-4'>
        <div className='text-center'>
            
                <TbTruck className='Iconstruck' />
                
                <h5 >ENVÍO A TODO EL PAÍS</h5>
              
                
            
        </div>
        <div className='text-center'>
            <IoCardSharp className='IconsCard'/>
            <h5> 3 Y 6 CUOTAS SIN INTERÉS</h5>
        </div>
        <div className='text-center'>
           <BsWhatsapp className='IconsWhastsapp'/>
           <h5>NO DUDES EN ESCRIBIRNOS</h5>
        </div>
   
        </div>
        
    );
};

export default DataStore;