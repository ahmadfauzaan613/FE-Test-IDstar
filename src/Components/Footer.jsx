import React from 'react'
import logoDark from '../Assets/logoDark.png'

function Footer() {
  return (
    <React.Fragment>
      <div className="mt-[10rem] bg-black  py-[3rem]">
        <div className="desktop3:px-[10rem]">
          <div className="grid grid-cols-2">
            <img src={logoDark} alt="" className="h-full w-[10vw]" />
            <div>
              <p className="text-white text-[14px] text-right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Praesentium natus quod eveniet aut perferendis distinctio iusto repudiandae, <br /> provident velit earum? Facebook Instagram Twitter GitHub Dribbble
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <p class="py-1 text-xs font-bold text-center text-[#745EFF]">&copy; 2024. Company Name. All rights reserved.</p>
      </div>
    </React.Fragment>
  )
}

export default Footer
