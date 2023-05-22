import React from 'react'
import Scroll from '../../images/scroll-acc-4.svg'
import Arrow from '../../images/big-arrow.png'

export default function CalltoAction() {
  return (
    <div className="items-center flex flex-col gap-2.5 h-[250px] justify-center ml-[-62px] mr-[-62px] relative w-[1440px] p-2.5">
        <div className="bg-[#e5e5e5] h-[250px] absolute w-[1143px] rounded-[0px_150px_150px_0px] left-0 top-0"></div>
        <div className="items-start flex flex-col gap-[58px] relative w-[1183.32px]">
            <div className="items-center self-stretch flex gap-12 justify-end relative">
                <img className="h-[209px] min-w-[29.32px] relative" alt="Scroll" src={Scroll} />
                <div className="items-center self-stretch flex flex-col gap-[58px] justify-center relative w-[1106px]">
                    <div className="items-center flex flex-col justify-center ml-[-0.53px] mr-[-0.53px] relative w-fit">
                        <div className="items-start self-stretch flex flex-col gap-8 justify-center relative">
                            <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit -mt-px">Have Any Question?</div>
                            <div className=" h-[101px] min-w-[1107.05px] relative">
                                <p className="text-[#404040] text-[40px] font-normal tracking-[0] leading-[50px] absolute w-[386px] left-0 top-0">
                                    <span className="font-medium">Don't Worry,</span>
                                    <span className="font-semibold">
                                        {" "}
                                        <br />
                                    </span>
                                    <span className="font-bold">We're Here For You</span>
                                </p>
                                <div className="text-[#a3a3a3] text-base font-normal tracking-[0] leading-7 absolute left-[697px] -top-px">
                                    Email:
                                    <br />
                                    Futuriordesign@gmail.com
                                </div>
                                <div className="text-[#a3a3a3] text-base font-normal tracking-[0] leading-7 absolute left-[970px] -top-px">
                                    Call:
                                    <br />
                                    (+96)25 8737 9974
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
