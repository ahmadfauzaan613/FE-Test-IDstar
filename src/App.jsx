import React from 'react'
import Header from './Components/Header'
import Services from './Components/Services'
import Features from './Components/Features'
import Banner from './Components/Banner'
import Expertise from './Components/Expertise'
import Carousel from './Components/Carousel'
import OurServices from './Components/OurServices'
import Footer from './Components/Footer'
import CustomerService from './Components/CustomerService'

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="desktop3:px-[10rem]">
        <Services />
        <Features />
      </div>
      <Banner />
      <div className="desktop3:px-[10rem]">
        <Expertise />
        <Carousel />
      </div>
      <OurServices />
      <div className="desktop3:px-[10rem]">
        <CustomerService />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
