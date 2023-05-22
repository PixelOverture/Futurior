import React from 'react'
import Material from '../../images/material-symbols-touch-app-rounded.svg'
import Scroll from '../../images/scroll-acc-1.svg'
import Icon from '../../images/icon-3.svg'
import Icon2 from '../../images/icon-4.svg'
import Icon3 from '../../images/icon-5.svg'

export default function Features() {
  return (
    <div className="items-start flex flex-col gap-[58px] relative w-fit">
        <div className="items-start flex flex-col gap-4 relative w-fit">
            <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit -mt-px">Features</div>
            <div className="h-[119px] min-w-[1240px] relative">
                <div className="h-[119px] absolute w-[629px] left-0 top-0">
                    <p className="text-[#404040] text-[40px] font-semibold tracking-[0] leading-[50px] absolute w-[629px] left-0 top-0">Modern Interior Design Solutions With A Personalized Touch</p>
                    <img className="h-14 absolute w-14 left-[394px] top-[63px]" alt="{Material}" src={Material} />
                </div>
                <p className="text-[#A3A3A3] text-base font-normal tracking-[0] leading-7 absolute w-[543px] left-[697px] -top-px">Expect innovative and modern interior designs that are tailored to your personal preferences and needs, all delivered with a commitment to personalized service and attention to detail.</p>
            </div>
        </div>
        <div className="items-center self-stretch flex gap-12 justify-end relative">
            <img className="h-[318.32px] min-w-[29.32px] relative" alt="Scroll Acc" src={Scroll} />
            <div className="items-start flex flex-col relative w-fit">
                <div className="items-center flex h-[330px] justify-center relative w-[1134px]">
                    <div className="self-stretch bg-[#525252] flex-1 h-[330px] min-w-[567px] relative">
                        <div className="text-white text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-[252px] left-9 top-[116px]">Innovative and Modern Designs</div>
                        <p className="text-white text-base font-normal tracking-[0] leading-7 absolute w-[284px] left-9 top-[212px]">
                            Specialize in creating innovative and modern designs that will elevate the look and feel of any space. 
                        </p>
                        <img className="h-16 absolute w-16 left-9 top-[33px]" alt="Icon" src={Icon}></img>
                    </div>
                    <div className="self-stretch bg-[#E5e5e5] flex-1 h-[330px] min-w-[567px] relative">
                        <div className="text-[#525252] text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-[298px] left-9 top-[116px]">Premium and Personalized Services</div>
                        <p className="text-base font-normal tracking-[0] leading-7 absolute w-[284px] left-9 top-[212px]">
                            Personalized Approach that takes into account your unique preferences and requirements.
                        </p>
                        <img className="h-16 absolute w-16 left-9 top-[33px]" alt="Icon2" src={Icon2}></img>
                    </div>
                </div>
                <div className="items-center flex h-[330px] justify-center relative w-[1134px]">
                    <div className="self-stretch bg-[#ececec] flex-1 h-[330px] min-w-[567px] relative">
                        <p className="text-[#525252] text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-60 left-9 top-[116px]">Quality to Detail, Quality Oriented</p>
                        <p className="text-[#525252] text-base font-normal tracking-[0] leading-7 absolute w-[300px] left-9 top-[212px]">
                            We take pride in our attention to detail, make sure every aspect of the project is executed to perfection.
                        </p>
                        <img className="h-16 absolute w-16 left-9 top-[33px]" alt="Icon3" src={Icon3}></img>
                    </div>
                    <div className="self-stretch bg-[#525252] flex-1 h-[330px] min-w-[567px] relative">
                        <div className="text-white text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-[161px] left-9 top-[116px]">Installation and Styling</div>
                        <p className="text-white text-base font-normal tracking-[0] leading-7 absolute w-[284px] left-9 top-[212px]">
                            Specialize in creating innovative and modern designs that will elevate the look and feel of any space.
                        </p>
                        <img className=" h-16 absolute w-16 left-9 top-[33px]" alt="Icon" src={Icon} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
