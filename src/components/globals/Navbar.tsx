"use client"

import Image from "next/image"

export default function Navbar() {
    return (
        <div className="fixed top-0 right-0 left-0 h-16 shadow-md">
            <div className="navbar-wrapper container h-full text-text-navbar">
                <div className="navbar-right right flex items-center h-full">
                    <Image
                        width={160}
                        height={48}
                        alt="Alibaba Text Logo"
                        className="w-[168px] h-12"
                        src="/images/text-alibaba.svg"
                    />
                    <span className="nav-item relative flex items-center">
                        بلیط هواپیما

                    </span>
                </div>
            </div>
        </div>
    )
}