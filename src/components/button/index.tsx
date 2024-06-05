"use client";

import Assets from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface ButtonInterface {
    label: string;
    showArrow: boolean;
    href?: string; // Optional href prop
    onClick?: () => void; // Optional onClick prop
}

const Button: FC<ButtonInterface> = ({ label = "", showArrow = false, href, onClick }) => {
    const Component = href ? 'a' : 'button'; // Use 'a' if href is provided, otherwise use 'button'

    return (
        <Component 
            className="flex px-5 rounded-full bg-base-baby-pink h-[40px] flex-row items-center text-base-burnished-brown hover:bg-base-burnished-brown hover:text-base-cornsilk active:bg-base-burnished-brown active:text-base-cornsilk transition-colors duration-200" 
            href={href}
            onClick={onClick}
            target={href ? "_blank" : undefined} // Open link in new tab if href is provided
            rel={href ? "noopener noreferrer" : undefined} // Security measure for external links
        >
            <div className="flex">
                <span className="text-sm font-semibold">{label}</span>
            </div>
            {showArrow && (
                <div className="flex px-2">
                    <Image src={Assets.IconArrow} alt="arrow" width={15} height={15} />
                </div>
            )}
        </Component>
    );
};

export default Button;
