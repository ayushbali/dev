import React from 'react'
import logo from '../img/image.jpg'

const Hero = () => {
  return (
    <section className='container mx-auto mt-14 mb-8 text-center'>
        {/* image to be fetched from api */}
        <img src={logo} className='mx-auto h-32 border border-black-10 rounded-full mb-5 scale-'/>
        <div className="p-2 flex flex-col gap-5">
        <h1 className='p-1 text-5xl sm:text-7xl font-bold font-sans bg-clip-text bg-gradient-to-r from-zinc-800 to-teal-950 text-transparent'>Rishu</h1>
        <p className='font-sans text-emerald-800'>SWE @Netflix, Ex-SWE @Google</p>
        <div className="contact-link">
            <ul className='flex flex-row flex-wrap gap-3 justify-center font-sans text-md'>
                <li>Github</li>
                <li>Resume</li>
                <li>LinkedIn</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default Hero