import React from 'react'

const Hero = () => {
  return (
    <div className='hero h-149.75  w-full'>
      <div className='flex flex-col  w-fit h-105 ml-14 justify-around p-18 pb-0'>
        <div className='flex gap-5 '>
            <div>
              <h1 className='text-4xl'>+200</h1>
              <p>Project completed</p>
            </div>
            <div>
              <h1 className='text-4xl'>+50</h1>
              <p>Startup raised</p>
            </div>
        </div>
        <div className=''>
          <h1 className='text-[190px] font-light  leading-none'>Hello</h1>
          <p>— It's D.Nova a design wizerd</p>
        </div>
        
      </div>
      <div className='flex gap-1 ml-14 pl-18 pt-35'>
          <h1>Scroll down</h1>
          <i class="ri-arrow-down-long-line"></i>
        </div>
    </div>
  )
}

export default Hero
