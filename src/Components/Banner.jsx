import React from 'react'
import BannerX from '../Assets/banner.jpg'

function Banner() {
  return (
    <React.Fragment>
      <div className="mt-[5rem]">
        <div className=" h-[20vh] relative overflow-hidden">
          <div className="absolute paralax inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${BannerX})` }}></div>
          <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
          <div className="flex items-center justify-center h-[20vh] relative z-20 text-white">
            <div>
              <h1 className="text-4xl font-bold ">Let’s make someting great together</h1>
              <p className="text-lg pt-3">
                Utilizing cutting-edge design approaches and the latest technologies, you will be streamlined <br /> and efficient on a year-over-year basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
