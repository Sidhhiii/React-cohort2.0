import React from 'react'
import logo from '../assets/logo.png'
const Nav = () => {
  return (
    <div className='flex mt-2 ml-14 '>
        <div className='flex w-[85%] gap-6 '>
            <div className=" w-fit h-10 flex justify-center items-center ">
                <h1>logo</h1>
            </div>

            <div className='flex items-center w-fit h-10 gap-6'>
                <a href="#">About Me</a>
                <a href="#">Portfolio</a>
                <a href="#">Services</a>
                <a href="#">Blog</a>
            </div>
        </div>
        <div className='flex items-center justify-end w-30 h-10 '>
            <a href="#">Book a call<i class="ri-arrow-right-up-fill"></i></a>
        </div>
    </div>
  )
}

export default Nav
