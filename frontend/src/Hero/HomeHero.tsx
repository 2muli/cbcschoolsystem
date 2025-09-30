import React from 'react'
import Img from'../assets/pic3.webp'
const HomeHero = () => {
  return (
   
   <div className='font-sans text-gray-800'>
    {/* Hero Section */}
     <section className="grid md:grid-cols-2 items-center p-12 bg-gray-200">
        <div>
          <h2 className="text-5xl font-bold mb-6">
          Competency Based Curriculum
          </h2>
          <p className="mb-6 text-lg">
            Transforming Education through CBC
            Empowering schools to personalize learning and improve student
            outcomes y improving the CBC system to something more digital,easy to interact and ready to improve,,
          </p>
          
        </div>
        <img
          src={Img}
          alt="Students learning"
          className="rounded-xl shadow-lg"
        />
      </section>
    </div>
  )
}

export default HomeHero
