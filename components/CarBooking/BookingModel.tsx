import React from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'

function BookingModel({car}:any) {
  return (
    <div className="modal-box w-11/12 max-w-5xl bg-black">
        <div className='border-b-[1px] pb-2'>
            <h3 className='text-[30px]  text-white font-semibold'>
                Rent Your Luxury !!!
            </h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
            <div>
                <CarCard car={car}/>
            </div>
            <div>
                <Form car={car}/>
            </div>
        </div>
    </div>
  )
}

export default BookingModel
