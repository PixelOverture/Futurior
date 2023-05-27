import React from 'react'
import Logo from '../../images/Logo.png'
import PrimaryButton from '../buttons/PrimaryButton'
import Line from '../../images/line.svg'

export default function Navbar() {
  return (
    <div className="items-center flex flex-col gap-6 justify-center relative w-[1291.89px] pt-6 pb-3 px-[26px] rounded-lg">
      <div className="items-center self-stretch flex justify-between relative">
        <img className="h-[18.46px] min-w-[125.89px] relative" src={Logo} alt={"Futurior"}/>    
        <div className ="items-center flex gap-10 relative w-fit">
          <nav className='items-center flex gap-1 justify-center relative w-fit'>
            <a href="/" className='mx-6 hover:text-primary'>About</a>
            <a href="/" className='mx-6 hover:text-primary'>Features</a>
            <a href="/" className='mx-6 hover:text-primary'>Services</a>
            <a href="/" className='mx-6 hover:text-primary'>Projects</a>
          </nav>
          <div className="flex">
          <PrimaryButton>
            Contact Us
          </PrimaryButton>
          </div>
        </div>
      </div>
      <img className="self-stretch h-px min-w-[1239.89px] object-cover relative" alt={"Line"} src={Line} />
    </div>
  )
}
