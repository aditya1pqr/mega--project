import React from 'react'

function About() {
  return (
    <>
    <h1 className='text-[40px] font-bold pl-[70px] pt-10 text-slate-800'>ABOUT REAL ESTATE</h1>
    <div className='flex flex-wrap w-full h-[600px] justify-around pt-10'>       
           <div className='w-[500px] bg-white p-6 h-[450px] rounded'>
             
             <p className='mb-4 text-slate-700'>Real Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
             <p className='mb-4 text-slate-700'>
             Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
             </p>
             <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
           </div>
           <div  className='bg-white p-6 h-[450px] rounded'><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-[400px] w-[400px]'/>
           
           </div>
    </div>
    </>
  )
}

export default About
