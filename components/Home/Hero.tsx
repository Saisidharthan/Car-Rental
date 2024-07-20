import Image from "next/image"

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
            <h2 className="text-[40px] md:text-[60px] font-semibold text-white">Premium Car Rental in Your Area</h2>
            <h2 className="text-[20px] text-gray-500 mt-5 pr-20 pl-3">Book the selected car effortlessly,Pay for driving only, Book the car now</h2>
            <button className="p-2 mt-5 bg-red-950 text-white pl-3 px-4 rounded-full hover:scale-105 transition-all">Explore Cars</button>
        </div>
        <div>
            <Image src='/hero-2-img.png' alt="hero" width={400} height={100} className="w-full object-cover md:mt-3"/>
        </div>
    </div>
  )
}

export default Hero