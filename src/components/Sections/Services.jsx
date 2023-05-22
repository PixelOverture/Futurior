import React from 'react'
import Scroll from '../../images/scroll-acc-2.svg'
import Icon from '../../images/icon-7.svg'
import Icon2 from '../../images/icon-3.svg'
import Icon3 from '../../images/icon-9.svg'
import Icon4 from '../../images/icon-5.svg'
import Icon5 from '../../images/icon-12.svg'


export default function Services() {
  return (
    <div className="items-start flex flex-col gap-[58px] relative w-fit">
        <div className="items-start flex flex-col gap-4 relative w-fit">
            <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit -mt-px">Services</div>
            <div className="h-[119px] min-w-[1240px] relative">
                <p className="text-[#404040] text-[40px] font-semibold tracking-[0] leading-[50px] absolute w-[500px] left-0 top-0">Personalized Experience From Start To Finish</p>
                <p className="text-[#A3A3A3] text-base font-normal tracking-[0] leading-7 absolute w-[543px] left-[697px] -top-px">
                    {" "}
                    We manage your project from start to finish with a seamless and stress-free experience. Our focus on excellence and attention to detail ensures stunning results.
                </p>
            </div>
        </div>
        <div className="items-center self-stretch flex gap-12 justify-end relative">
            <img className="h-[304px] min-w-[29.32px] relative" alt="Scroll" src={Scroll} />
            <div className="items-center flex h-[330px] justify-center relative w-[1134px]">
                <div className="self-stretch bg-[#525252] flex-1 h-[330px] min-w-[378px] relative">
                    <div className="text-[#e5e5e5] text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-[226px] left-9 top-[168px]">Design Concept Development</div>
                    <img className="h-9 absolute w-9 left-[312px] top-[30px]" alt="Icon" src={Icon} />
                    <img className="h-16 absolute w-16 left-9 top-[85px]" alt="Icon2" src={Icon2} />
                </div>
                <div className="self-stretch bg-[#a3a3a3] flex-1 h-[330px] min-w-[378px] relative">
                    <div className="text-[#ececec] text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-60 left-9 top-[168px]">Project Management</div>
                    <img className="h-16 absolute w-16 left-9 top-[85px]" alt="Icon3" src={Icon3} />
                    <img className="h-9 absolute w-9 left-[312px] top-[30px]" alt="Icon" src={Icon} />
                </div>
                <div className="self-stretch bg-[#e5e5e5] flex-1 h-[330px] min-w-[378px] relative">
                    <div className="text-[#525252] text-[28px] font-semibold tracking-[0] leading-[38px] absolute w-[186px] left-9 top-[168px]">Installation and Styling</div>
                    <img className="h-16 absolute w-16 left-9 top-[85px]" alt="Icon4" src={Icon4} />
                    <img className="h-9 absolute w-9 left-[312px] top-[30px]" alt="Icon5" src={Icon5} />
                </div>
            </div>
        </div>
    </div>
  )
}
