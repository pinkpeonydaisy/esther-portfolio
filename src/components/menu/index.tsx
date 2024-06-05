"use client"

import Assets from "@/assets"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Menu = () => {
    const pathname = usePathname();
    const [showMenuMobile, setShowMenuMobile] = useState(false)

    return (
        <div className="flex w-full h-[60px] px-5 bg-base-burnished-brown sticky top-0 items-center z-30">
            <div className="flex w-4/12">
                <Link href="/">
                    <span className="text-lg text-base-baby-pink font-semibold">My Portfolio</span>
                </Link>
            </div> 
            <div className="hidden md:flex w-8/12 justify-between">
                <Link href="/about" className={`${pathname === "/about" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">About</span>
                    </div>
                </Link>

                <Link href="/ui-ux-design" className={`${pathname === "/ui-ux-design" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">UI/UX Design</span>
                    </div>
                </Link>

                <Link href="/web-development" className={`${pathname === "/web-development" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">Website Development</span>
                    </div>
                </Link>

                <Link href="/system-analysis" className={`${pathname === "/system-analysis" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">System Analysis</span>
                    </div>
                </Link>

                <Link href="/product-and-project-management" className={`${pathname === "/product-and-project-management" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">Product & Project Management</span>
                    </div>
                </Link>


                <Link href="security-governance" className={`${pathname === "/security-governannce" ? "text-base-baby-pink" : "text-base-cornsilk"}`}>
                    <div className="flex">
                        <span className="text-sm text-center">Security and Governance</span>
                    </div>
                </Link>
            </div>
            <div className="flex md:hidden w-8/12 justify-end cursor-pointer select-none" onClick={() => setShowMenuMobile(true)}>
                <Image src={Assets.IconBurger} alt="burger" width={30} height={30}/>
            </div>

            {/* menu mobile */}

            {
                showMenuMobile &&
                <div className="flex absolute bg-base-black/50 w-full min-h-screen left-0 top-0" onClick={() => setShowMenuMobile(false)}>
                    <div className="flex w-full max-w-[400px] bg-base-white p-3 flex-col z-40">
                        <Link href="/about" className={`${pathname === "/about" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">About</span>
                            </div>
                        </Link>

                        <Link href="/ui-ux-design" className={`${pathname === "/ui-ux-design" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">UI/UX Design</span>
                            </div>
                        </Link>

                        <Link href="/web-development" className={`${pathname === "/web-development" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">Website Development</span>
                            </div>
                        </Link>

                        <Link href="/system-analysis" className={`${pathname === "/system-analysis" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">System Analysis</span>
                            </div>
                        </Link>

                        <Link href="/product-and-project-management" className={`${pathname === "/product-and-project-management" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">Product & Project Management</span>
                            </div>
                        </Link>

                        <Link href="/security-governance" className={`${pathname === "/security-governance" ? "text-base-black" : "text-[#727272]"}`}>
                            <div className="flex my-2">
                                <span className="text-sm">Security & Governance</span>
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Menu