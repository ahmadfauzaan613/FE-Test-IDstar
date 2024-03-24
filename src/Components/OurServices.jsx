import React from 'react'
import Programming from '../Assets/programming.jpg'

function Teks(props) {
  return (
    <div className="flex items-center gap-2  mb-[1rem]">
      <span className="material-symbols-outlined text-white text-[14px]">add</span>
      <h1 className="text-white text-[20px]">{props.text}</h1>
    </div>
  )
}

function OurServices() {
  const Data = [{ name: 'E-commerce Development' }, { name: 'Apps Design And Development' }, { name: 'E-commerce Development' }, { name: 'Social Media Management' }, { name: 'Content Marketing Service' }, { name: 'Web And Design Development' }]
  return (
    <React.Fragment>
      <div className="mt-[3rem] bg-black">
        <div className="grid grid-cols-2 items-center gap-[20px]">
          <div className="pl-[10rem]">
            <div className="mb-[3rem]">
              <h6 className="text-bold text-[#745EFF] ">Features</h6>
              <h1 className="text-[40px] text-left text-white font-bold">
                Build your business <br /> with the latest technology
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-3 w-fit   border border-[#745EFF] rounded-[10px] p-5">
              {Data.map((item) => (
                <Teks text={item.name} />
              ))}
            </div>
          </div>
          <img src={Programming} className="w-full h-full rounded-md" alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurServices
