"use client"
import CarsFilter from "@/components/Home/CarsFilter";
import CarsLists from "@/components/Home/CarsLists";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import TostMsg from "@/components/TostMsg";
import { BookingFlag } from "@/Context/BookingFlag";
import { getCarsList } from "@/Services";
import { useEffect, useState } from "react";

export default function Home() {
    const [showTostMsg,setTostMsg]=useState<boolean>(false);
    const [CarsList,setCarsList]=useState<any>([])
    const [CarsOrgList,setCarsOrgList]=useState<any>([])
    useEffect(()=>{
      getCarList();
    },[])
    const getCarList =async()=>{
      const result:any=await getCarsList();
      setCarsList(result?.carLists)
      setCarsOrgList(result?.carLists);
    }

    const filterCarList=(brand:string)=>{
      const filterList=CarsOrgList.filter((item:any)=>
        item.carBrand==brand
      );
      setCarsList(filterList);
    }
    const orderCarList=(order:any)=>{
      const sortedData=[...CarsOrgList].sort((a,b)=>
        order==-1? a.price - b.price:b.price -a.price);
        setCarsList(sortedData);
    }

  return (
    <div className="p-5 sm:px-10 md:px-20 data-theme:cupcake">
      <BookingFlag.Provider value={{showTostMsg,setTostMsg}}>
        <Hero />
        <SearchInput />
        <CarsFilter CarsList={CarsOrgList} setBrand={(value:string)=>filterCarList(value)} 
                    orderCarList={(value:string)=>orderCarList(value)}/>
        <CarsLists CarsLists={CarsList}/>
        {showTostMsg?<TostMsg msg={'Booking Created SuccessFully'}/>:null}
      </BookingFlag.Provider>
    </div>
  );
}
