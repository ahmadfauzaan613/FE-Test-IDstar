import React from 'react'
import bg2 from '../Assets/bg2.jpg'
import inno from '../Assets/project-management.png'
import Seamless from '../Assets/pattern.png'
function Features() {
  return (
    <React.Fragment>
      <div className="my-[3rem]">
        <h6 className="text-black text-bold">Features</h6>
        <h1 className="text-left text-[#745EFF] font-bold desktop3:text-[36px] phone:text-[24px]">
          We execute projects <br className="phone:hidden" /> utilizing our <br className="phone:hidden" /> specialized and strategic approach
        </h1>
        <div className="grid desktop3:grid-cols-12 gap-4 mt-12">
          <div className="border desktop3:col-span-4 rounded-lg p-6 bg-black">
            <h6 className="text-white font-bold">GIVING THE BEST</h6>
            <p className="desktop3:text-[20px] text-white pt-3">
              We are perpetually innovating for the <br className="phone:hidden" /> future, meticulously crafting the ensuing <br className="phone:hidden" /> generation of products, brands, and <br className="phone:hidden" /> design attributes from a multifaceted <br className="phone:hidden" /> and
              hybrid viewpoint.{' '}
              <span className="text-[#745EFF] font-bold">
                This approach <br className="phone:hidden" /> ensures that our creations are not only <br className="phone:hidden" /> current but also forward-thinking.
              </span>
            </p>
            <p className="desktop3:text-[20px] text-white pt-3">
              positioning them at the forefront of <br /> industry advancements and <br />
              technological progress.
            </p>
          </div>
          <div className="desktop3:col-span-8 rounded-lg">
            <img src={bg2} alt="" className="w-full desktop3:h-[24vh] phone:h-full rounded-md " />
            <div className="grid desktop3:grid-cols-2 gap-4 mt-4 h-[25vh]">
              <div className="bg-black w-full h-full rounded-md p-2">
                <div className="pb-[2rem] pt-2">
                  <img src={inno} alt="" className="w-[3vw] h-full" />
                </div>
                <h1 className="text-[32px] text-[#745EFF]">Innovative & Up To Date</h1>
                <p className="pt-1 text-white">signifies a commitment to pioneering the latest technological advancements and trends.</p>
              </div>
              <div className="bg-black w-full h-full rounded-md p-2">
                <div className="pb-[2rem] pt-2">
                  <img src={Seamless} alt="" className="w-[3vw] h-full" />
                </div>
                <h1 className="text-[32px] text-[#745EFF]">Seamless Experience</h1>
                <p className="pt-2 text-white">This commitment is pivotal in cultivating a sense of reliability and trust with clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Features
