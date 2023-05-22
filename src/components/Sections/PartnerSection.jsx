import React from 'react'
import Partner from '../../images/partner-logo.png'

export default function PartnerSection() {
  return (
    <div className="items-center flex flex-col gap-[58px] justify-center relative w-fit">
        <div className="items-start flex flex-col gap-4 relative w-fit">
            <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit -mt-px">Trusted</div>
            <div className="h-[119px] min-w-[1240px] relative">
                <p className="text-[#404040] text-[40px] font-semibold tracking-[0] leading-[50px] absolute w-[629px] left-0 top-0">
                    We Have Partnered With <br />
                    world-class Companies.
                </p>
                <p className="text-[#A3A3A3] text-base font-normal tracking-[0] leading-7 absolute w-[543px] left-[697px] -top-px">
                    We&#39;re proud to have partnered with world-class companies to finish stunning projects. Our
                    collaborations bring together&nbsp;&nbsp;unparalleled expertise, resulting in exceptional spaces that
                    exceed expectations.
                </p>
            </div>
        </div>
        <img className="h-[134px] min-w-[1083px] relative" alt="{Partner}" src={Partner} />
    </div>
  )
}
