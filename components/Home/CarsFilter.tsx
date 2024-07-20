import React, { useEffect, useState } from 'react'

function CarsFilter({CarsList,setBrand,orderCarList}:any) {
    const[brandList,setBrandList]=useState<any>();
    const Brandset=new Set()

    useEffect(()=>{
        filterCarList();
    },[CarsList])
    const filterCarList=()=>{
        CarsList.forEach((element:any) => {
            Brandset.add(element.carBrand);
        });
        console.log(Brandset);
        setBrandList(Array.from(Brandset));

    }
  return (
    <div className='mt-2 flex items-center justify-between' >
        <div>
            <h2 className='text-[30px] font-bold text-white'>Cars Catalog</h2>
            <h2>Explore our cars you might like</h2>
        </div>
        <div className='flex gap-5 text-white'>
            <select className="select select-bordered w-full md:block max-w-xs hidden"
            onChange={(e)=>orderCarList(e.target.value)}>
                <option disabled selected>Price</option>
                <option value={-1}>Min to MAX</option>
                <option value={1}>Max to Min</option>
            </select>
            <select className="select select-bordered w-full md:block max-w-xs hidden"
            onChange={(e)=>setBrand(e.target.value)}>
                <option disabled selected>Manufacturer</option>
                {brandList&&brandList?.map((brand:string,index:number)=>(
                    <option key={index}>{brand}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default CarsFilter