import React from 'react'
import bgHome from '../Assets/bgx1.jpg'
import logoDark from '../Assets/logoDark.png'

function NavbarStatis() {
  const Data = [{ name: 'digital service' }, { name: 'case study' }, { name: 'Company' }, { name: 'Blog' }, { name: 'others' }]
  return (
    <div className="relative flex items-center pt-[2rem] z-10 justify-between desktop3:px-[10rem] text-white">
      <div className="w-[10vw]">
        <img src={logoDark} alt="" className="h-full w-full" />
      </div>
      <div className="flex items-center gap-10">
        {Data.map((item) => (
          <p className=" cursor-pointer uppercase hover:text-[#745EFF]">{item.name}</p>
        ))}
      </div>
    </div>
  )
}

function HeaderStatis() {
  return (
    <div className="relative flex items-center z-10 h-[82vh] desktop3:px-[10rem] text-white">
      <div>
        <h1 className="text-[85px]  font-bold leading-[5rem]">Digital Center Indonesia</h1>
        <p className="pt-5 text-[20px] ">
          Improve your business by analyzing it deeply and using the latest <br /> technology to increase growth.
        </p>
        <button className="border rounded-[5px] border-white text-white font-bold hover:border-[#fff] hover:bg-[#fff] hover:text-black px-[2rem] py-[0.9rem] mt-[2rem]">Get To Know More</button>
      </div>
    </div>
  )
}

function Header() {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0 z-0 bg-cover bg-center paralax" style={{ backgroundImage: `url(${bgHome})` }}></div>
        <div className="absolute inset-0 z-10 bg-black opacity-75"></div>
        <NavbarStatis />
        <HeaderStatis />
      </div>
    </React.Fragment>
  )
}

export default Header
