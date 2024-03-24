import React from 'react'

function CardServices(props) {
  return (
    <div key={props.index} className="rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <div className="grid desktop3:grid-cols-12">
        <div>
          <h3 className="mt-0.5 font-bold text-[30px] text-[#745EFF]">{props.index + 1}</h3>
        </div>
        <div className="col-span-9">
          <h3 className="mt-0.5 font-medium text-[22px] text-gray-900">{props.title}</h3>
          <p className=" line-clamp-3 text-sm/relaxed text-gray-500">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

function Services() {
  const dataService = [
    { title: 'Teamwork', text: 'Providing the best results is a lengthy process that requires cooperation', img: '../../Assets/diversity.png' },
    { title: 'Problem Solvers', text: 'Always giving you the newest ideas and information that fits your needs' },
    { title: 'Offer Solutions', text: 'ensuring that you achieve the desired outcomes effectively and efficiently.' },
  ]

  return (
    <React.Fragment>
      <div className="mt-[3rem]">
        <h6 className="text-[#745EFF] text-bold">Processing</h6>
        <h1 className="text-[48px]">How we work</h1>
        <p>Find out how the digital center can help you work together.</p>
        <div className="my-[2rem] grid gap-3 desktop3:grid-cols-3 phone:grid-cols-1">
          {dataService.map((item, i) => (
            <CardServices index={i} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services
