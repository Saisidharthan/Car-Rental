import { BookingFlag } from "@/Context/BookingFlag";
import { createBooking, getStoreLocation } from "@/Services";
import { useContext, useEffect, useState } from "react";

function Form({car}:any) {
    const[storeLocation,setStoreLocation]=useState<any>([]);
    const{showTostMsg,setTostMsg}=useContext(BookingFlag)
    useEffect(()=>{
        getStoreLocation_();
    },[])
    const getStoreLocation_=async()=>{
        const resp:any=await getStoreLocation();
        setStoreLocation(resp?.storesLocations)
    }
    const[formValue,setFormValue]=useState({
        location:'',
        pickUpDate:'',
        dropOffDate:'',
        pickUpTime:'',
        dropOffTime:'',
        contactNumber:'',
        userName:'Sai Sidharthan',
        carId:""
    })
    const handleChange=(event:any)=>{
        setFormValue({
            ...formValue,
            [event.target.name]:event.target.value
        })
    };
    const handleSubmit=async()=>{
        console.log(formValue);
        const resp=await createBooking(formValue);
        if(resp)
        {
            setTostMsg(true);
        }
    }
    useEffect(()=>{
        if(car)
        {
            setFormValue({
                ...formValue,
                carId:car.id
            })
        }
    },[car])
  return (
    <div className="mt-8">
        <div className="flex flex-col w-full mb-5">
            <label className="text-gray-400">PickUp Location</label>
            <select className="select select-bordered w-full " name="location" onChange={handleChange}>
                <option disabled selected>Pickup Location ?</option>
                {storeLocation&&storeLocation?.map((loc:any,index:number)=>
                (
                    <option key={index}>{loc?.address}</option>
                ))}
            </select>
        </div>
        <div className="flex flex-row gap-5 mb-5 ">
            <div className="flex flex-col w-full gap-2 ">
                <label className="text-gray-400 font-semibold">Pick Up Date</label>
                <input type='date' placeholder="TypeHere" className="input input-bordered w-full max-w-lg" name="pickUpDate" onChange={handleChange}/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label className="text-gray-400 font-semibold">Drop Off Date</label>
                <input type="date" placeholder="Type Here" className="input input-bordered w-full max-w-lg " name="dropOffDate" onChange={handleChange}/>
            </div>
        </div>
        <div className="flex flex-row gap-5 mb-5">
            <div className="flex flex-col gap-2 w-full">
                <label className="text-gray-400 font-semibold">Pick Up Time</label>
                <input type='time' placeholder="TypeHere" className="input input-bordered w-full max-w-lg" name="pickUpTime"onChange={handleChange}/>
            </div>
            <div className="flex flex-col w-full gap-2">
                <label className="text-gray-400 font-semibold">Drop off Time</label>
                <input type="time" placeholder="Type Here" className="input input-bordered w-full max-w-lg" name="dropOffTime" onChange={handleChange}/>
            </div>
        </div>
        <div className="flex flex-col w-full mb-5 gap-2">
            <label className="text-gray-400 font-semibold">Contact Number</label>
            <input type="number" placeholder="Type Here" className="input input-bordered w-full max-w-lg" name="contactNumber" onChange={handleChange}/>
        </div>
        <div className="modal-action">
            <form method="dialog" >
                <button className="btn bg-slate-700 text-white mr-10 w-32 font-bold text-base">Close</button>
                <button className="btn bg-gray-950 text-white hover:bg-gray-300 hover:text-black w-32 font-bold text-base" onClick={handleSubmit}>Save</button>
            </form>
        </div>

    </div>
  )
}

export default Form