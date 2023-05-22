import React from 'react'
import Navbar from '../Navbar'
import Logo from '../../images/logo.svg'
import Logo2 from '../../images/logo-1.svg'

export default function Layout({children}) {
  return (
    <div className="items-center bg-white border flex flex-col gap-[110px] justify-center min-w-[1440px] relative pt-3 pb-7 px-[62px] border-none">
        <img className="h-[1567px] absolute w-[1201px] left-[320px] top-[51px]" alt="Logo" src={Logo} />
        <img className="h-[1567px] absolute w-[821px] left-0 top-[1601px]" alt="Logo2" src={Logo2} />
        <Navbar/> 
        {children}
    </div>
  )
}
