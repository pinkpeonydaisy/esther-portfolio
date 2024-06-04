"use client"

import Assets from "@/assets"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="flex bg-base-cornsilk relative h-[200px] md:h-[350px] flex-col">
            <Image src={Assets.ImageFooter} alt="gmail" width={20} height={20} className="w-full relative top-[-10px]"/>
            <div className="flex flex-col p-5">
                <div className="flex">
                    <span className="text-xl text-base-burnished-brown font-semibold">Contact me :</span>
                </div>
                <div className="flex mt-3 flex-col md:flex-row">
                    <div className="flex items-center mr-2">
                        <div className="flex px-2">
                            <div className="flex w-[20px] h-[20px]">
                                <Image src={Assets.IconGmail} alt="gmail" width={20} height={20}/>
                            </div>
                        </div>
                        <div className="flex">
                            <span>loremipsum@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-3 md:mt-0">
                        <div className="flex px-2">
                            <Image src={Assets.IconLinkedin} alt="gmail" width={20} height={20}/>
                        </div>
                        <div className="flex">
                            <span>linkedin.com/loremipsum</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer