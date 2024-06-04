"use client"

import Assets from "@/assets"
import Image from "next/image"
import { FC } from "react"

interface ButtonInterface {
    label : string,
    showArrow : boolean,
    onClick : () => void
}

const Button:FC<ButtonInterface> = ({ label="", showArrow=false, onClick }) => {
    return (
        <button className="flex px-5 rounded-full bg-base-baby-pink h-[40px] flex-row items-center" onClick={() => onClick()}>
            <div className="flex">
                <span className="text-sm text-base-burnished-brown">{label}</span>
            </div>

            {
                showArrow &&
                <div className="flex px-2">
                    <Image src={Assets.IconArrow} alt="arrow" width={15} height={15}/>
                </div>
            }
        </button>
    )
}

export default Button