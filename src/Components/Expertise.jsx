import React from 'react'

function Question(props) {
  return (
    <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 className="text-lg font-medium">{props.title}</h2>

        <span className="desktop3:relative size-5 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed text-gray-700">{props.text}</p>
    </details>
  )
}

function Expertise() {
  const Data = [
    { title: 'Empowering Professional Excellence through Transformative Design ', text: 'stands at the intersection of innovation and professionalism, shaping the future of business operations through transformative design.' },
    { title: 'Refining Workflows with Aesthetic Functionality', text: 'with an acute understanding of professional demands, we create solutions that streamline operations, foster productivity, and redefine the elegance of efficiency.' },
    { title: 'Architecting Digital Elegance, Advancing Professionalism', text: 'Our ethos is founded on crafting digital experiences that embody elegance and advance professionalism.' },
    { title: 'Engineering Precision, Designing Success ', text: 'We believe that through expertly engineered design, we can transform everyday business tasks into seamless, successful outcomes, ensuring that professionalism is not just maintained but enhanced.' },
  ]
  return (
    <React.Fragment>
      <div className="desktop3:mt-[5rem] mb-3">
        <div className="grid desktop3:grid-cols-2">
          <div>
            <h6 className=" text-bold text-[#745EFF]">Features</h6>
            <h1 className="text-[36px] text-left text-black font-bold">
              With more than 3+ years of <br /> experience, our team has <br /> become expert in digital <br /> Transformations.
            </h1>
            <p className="text-[#745EFF] pt-3">Grow brands through bold, strategic creative</p>
          </div>
          <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
            {Data.map((item) => (
              <Question title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Expertise
