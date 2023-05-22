import React from 'react'
import Scroll from '../../images/scroll-acc-3.svg'
import Img from '../../images/img-1.png'
import Image2 from '../../images/img-3.png'
import Image3 from '../../images/img-4.png'
import More from '../../images/vector.svg'

export default function Projects() {
  return (
    <div className="items-start flex flex-col gap-[58px] relative w-fit">
        <div className="items-start flex flex-col gap-4 relative w-fit">
            <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit -mt-px">Project</div>
            <div className="h-[119px] min-w-[1240px] relative">
                <p className="text-[#404040] text-[40px] font-semibold tracking-[0] leading-[50px] absolute w-[500px] left-0 top-0">Several Projects Perfectly Finished From Us</p>
                <p className="text-[#A3a3a3] text-base font-normal tracking-[0] leading-7 absolute w-[543px] left-[697px] -top-px">
                    Finished project to show, with maximum satisfy feedback from clients, to make you sure it's a wise choice
                    to work with us.
                </p>
            </div>
        </div>
        <div className="items-center self-stretch flex gap-12 justify-end relative">
            <img className="h-[304px] min-w-[29.32px] relative" alt="Scroll" src={Scroll} />
            <div className="items-center flex flex-col gap-8 justify-center relative w-fit">
                <div className="items-center flex gap-8 justify-center relative w-[1134px]">
                    <div className="items-start flex flex-1 flex-col h-[560px] justify-center relative">
                        <div className="items-start flex flex-1 flex-col justify-center relative w-[551px]">
                            <img className="self-stretch h-[560px] min-w-[551px] object-cover relative" alt="Image" src={Img} />
                        </div>
                    </div>
                    <div className="items-start flex flex-1 flex-col h-[560px] justify-center relative">
                        <div className="items-start flex flex-1 flex-col justify-center relative w-[551px]">
                            <img className="self-stretch h-[560px] min-w-[551px] object-cover relative" alt="Image" src={Img} />
                        </div>
                    </div>
                </div>
                <div className="items-center flex gap-8 justify-center relative w-[1134px]">
                    <div className="items-start self-stretch flex flex-1 flex-col justify-center relative">
                        <div className="items-start flex flex-1 flex-col justify-center relative w-[551px]">
                            <img className="self-stretch h-[560px] min-w-[551px] object-cover relative" alt="Image2" src={Image2} />
                        </div>
                    </div>
                    <div className="items-start flex flex-1 flex-col justify-center relative">
                        <img className="self-stretch h-[560px] min-w-[551px] object-cover relative" alt="Image3" src={Image3} />
                    </div>
                </div>
                <div className="items-center flex gap-2.5 justify-center relative w-fit pt-[38px] pb-0 px-0">
                    <div className="text-[#404040] text-2xl font-medium tracking-[0] leading-[34px] relative whitespace-nowrap w-fit">SEE&nbsp;&nbsp;MORE</div>
                    <img className="h-[22.61px] min-w-[34.84px] relative" alt="More" src={More} />
                </div>
            </div>
        </div>
    </div>
  )
}
