import React from 'react'

function People(props) {
  const stars = []
  for (let i = 0; i < props.star; i++) {
    stars.push(
      <span key={i} className="material-symbols-outlined text-green-600">
        stars
      </span>
    )
  }
  return (
    <div className="border bg-black border-[#745EFF] p-4 rounded-md w-full h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-bold text-[#745EFF] text-[22px] mb-2">{props.name}</h1>
        <div className={`${props.star < 0 ? 'hidden' : 'flex'} items-center gap-1`}>{stars}</div>
      </div>
      <p className="pt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores dolor, cumque cum eum ipsam quisquam neque suscipit in quidem quae laborum libero totam at, saepe alias veritatis laudantium delectus.</p>
    </div>
  )
}

function CustomerService() {
  const Data = [
    { name: 'John', star: 3 },
    { name: 'Gabriel', star: 3 },
    { name: 'Lisa', star: 4 },
    { name: 'Albert', star: 2 },
    { name: 'Ahmad', star: 5 },
    { name: 'Michael', star: 3 },
    { name: 'Robert', star: 3 },
    { name: 'Aldi', star: 3 },
  ]
  return (
    <React.Fragment>
      <div className="mt-[3rem]">
        <div>
          <h6 className="text-bold text-[#745EFF] ">Testimonial</h6>
          <h1 className="text-[40px] text-left text-black font-bold">Read trusted reviews from our customers</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-[4rem]">
          {Data.map((item, index) => (
            <People key={index} name={item.name} star={item.star} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CustomerService
