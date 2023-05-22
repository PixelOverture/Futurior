import React from 'react'
import ScrollAcc from '../../images/scroll-acc.svg'
import House from '../../images/img.png'
import Icon from '../../images/icon.svg'
import Icon2 from '../../images/icon-1.svg'
import Icon3 from '../../images/icon-2.svg'

export default function HeroSection() {
  return (
    <section className="items-start flex flex-col gap-[58px] relative w-fit">
        <div className="h-[136px] min-w-[1240px] relative">
            <div className="h-[136px] absolute w-[542px] left-0 -top-px">
                <h1 className="text-[#404040] text-[58px] font-semibold tracking-[0] leading-[68px] absolute w-[542px] left-0 top-0">
                    <span className="text-[#404040] text-[58px] font-semibold tracking-[0] leading-[68px]">Live In The </span>
                    <span className="underline decoration-2 underline-offset-8">Future</span><br></br>
                    <span className="text-[#404040] text-[58px] font-semibold tracking-[0] leading-[68px]">With </span>
                    <span className="underline decoration-2 underline-offset-8">Future</span>
                    <span className="text-[#404040] text-[58px] font-semibold tracking-[0] leading-[68px]"> Interior</span>
                </h1>
            </div>
            <p className="text-tertiary text-base font-normal tracking-[0] leading-7 absolute w-[543px] left-[697px] top-2">
                With a focus on modernity and innovation, Futurior is a top interior design company that offers personalized
                attention and innovative design solutions for homes and businesses.
            </p>
        </div>
        <div className="items-center self-stretch flex gap-12 justify-end relative">
            <img className="h-[304px] min-w-[30px] relative" alt={"Scroll Acc"} src={ScrollAcc}></img>
            <div className="items-center flex justify-center relative w-[1134px]">
                <div className="self-stretch bg-tertiary flex-1 h-[336px] min-w-[386px] relative">
                    <p className="text-white text-base font-normal tracking-[0] leading-7 absolute w-[310px] left-9 top-[246px]">
                        Enhance your life with furniture that is not only modern, but suits you literally.
                    </p>
                    <div className="text-white text-base font-normal tracking-[0] leading-7 absolute whitespace-nowrap left-[263px] top-[61px]">See Video</div>
                </div>
                <img className="h-[336px] min-w-[748px] relative" alt="{House}" src={House} />
                <img className="h-[130px] absolute w-[90px] left-[1044px] top-[120px]" alt="{Icon}" src={Icon} />
                <img className="h-[130px] absolute w-[90px] left-[1044px] top-[70px]" alt="{Icon1}" src={Icon2} />
                <div className="backdrop-blur-sm backdrop-brightness-[100%] bg-[#ffffff80] shadow-[0px_0px_40px_#00000052] h-16 absolute w-16 rounded-[32px] left-[354px] top-[46px]">
                    <img className="h-[50px] absolute w-[50px] left-[7px] top-[7px]" alt="{Icon2}" src={Icon3} />
                </div>
            </div>
        </div>
    </section>
  )
}
