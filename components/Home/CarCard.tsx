import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCarAlt, FaGasPump } from 'react-icons/fa';
import { PiSteeringWheelFill } from 'react-icons/pi';

function CarCard(props: any) {
    const [car, setCar] = useState<any>();

    useEffect(() => {
        if (props.car) {
            setCar(props.car);
        }
    }, [props.car]);

    return car && (
        <div className='group bg-black p-2 sm:p-5 rounded-3xl m-1 sm:m-5 hover:bg-gray-950 hover:border-[2px] cursor-pointer border-white duration-50'>
            <h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
            <h2 className='text-[28px] font-bold mb-2'>
                <span className='text-[12px] font-light '>$ </span>
                {car.price}
                <span className='text-[12px] font-light'> /day</span>
            </h2>
            <Image
                src={car.image?.url}
                alt={car.name}
                width={220}
                height={200}
                className='w-[250px] h-[150px] mb-3 object-contain'
            />
            <div className='flex justify-around group-hover:hidden'>
                <div className='text-center text-white'>
                    <PiSteeringWheelFill className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[18px] mb-2 font-light'>{car.carType}</h2>
                </div>
                <div className='text-center text-white'>
                    <FaCarAlt className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[18px] mb-2 font-light'>{car.carBrand}</h2>
                </div>
                <div className='text-center text-white'>
                    <FaGasPump className='w-full text-[22px] mb-2' />
                    <h2 className='line-clamp-5 text-[18px] mb-2 font-light'>{car.carAvg} MPG</h2>
                </div>
            </div>
            <button className='hidden group-hover:flex bg-gradient-to-r from-red-950 to-black p-2 rounded-lg text-white w-full px-5 justify-between text-2xl border-[1px] border-red-950'>
                Rent Now
                {/*<span className='bg-red-900 p-1 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </span> */}
            </button>
        </div>
    );
}

export default CarCard;
