import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModel from '../CarBooking/BookingModel'

function CarsLists(props:any) {
  const [selectedCar,setselectedCar]=useState<any>([]);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-6'>
        {props.CarsLists.map((car:any,index:number)=>(
            <div onClick={()=>{(document as any).getElementById('my_modal_4').showModal();
              setselectedCar(car)
            }}>
                <CarCard car={car}/>
            </div>
        ))}
          <dialog id="my_modal_4" className="modal">
            <BookingModel car={selectedCar}/>
          </dialog>
    </div>
  )
}

export default CarsLists