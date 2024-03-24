import React from 'react'
import logo1 from '../Assets/Logo-brand-15.webp'
import logo2 from '../Assets/Logo-brand-10.webp'
import logo3 from '../Assets/Logo-brand-11.webp'
import logo4 from '../Assets/Logo-brand-12.webp'
import logo5 from '../Assets/Logo-brand-14.webp'
import logo6 from '../Assets/Logo-brand-13.webp'

function Carousel() {
  return (
    <div className="mt-[5rem] mb-3 px-[2rem]">
      <h1 className="text-[24px] text-center text-[#745EFF] font-bold pt-[2rem]">
        WE WORKED WITH GLOBAL <br /> LARGEST BRANDS
      </h1>
      <div className="grid grid-cols-6">
        <img src={logo1} alt="" className="w-[12vw] mx-auto h-full" />
        <img src={logo2} alt="" className="w-[12vw] mx-auto h-full" />
        <img src={logo3} alt="" className="w-[12vw] mx-auto h-full" />
        <img src={logo4} alt="" className="w-[12vw] mx-auto h-full" />
        <img src={logo5} alt="" className="w-[12vw] mx-auto h-full" />
        <img src={logo6} alt="" className="w-[12vw] mx-auto h-full" />
      </div>
    </div>
  )
}

export default Carousel
