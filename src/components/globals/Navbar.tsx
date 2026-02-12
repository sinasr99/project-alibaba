"use client"

import Image from "next/image"
import {MdOutlineArrowForwardIos, MdOutlineLuggage} from "react-icons/md";
import Link from "next/dist/client/link";
import {FaRegQuestionCircle, FaRegUser} from "react-icons/fa";
import {useContext} from "react";
import {ModalContext} from "@/context/ModalContext";
import AuthModal from "@/components/home/AuthModal";

export default function Navbar() {
    const {showModal} = useContext(ModalContext)

    const showLoginModal = () => {
        showModal(
            <AuthModal/>,
            600,
            500
        )
    }

    return (
        <div className="fixed top-0 right-0 left-0 h-16 shadow-md">
            <div className="navbar-wrapper container h-full text-text-navbar flex items-center justify-between">
                <div className="navbar-right right flex items-center gap-4 h-full text-text-sub-item">
                    <Image
                        loading="eager"
                        width={200}
                        height={200}
                        alt="Alibaba Text Logo"
                        className="w-[168px] h-12"
                        src="/images/text-alibaba.svg"
                    />
                    <div className="nav-item relative group">
                        <span className="flex items-center gap-1 cursor-pointer">
                            بلیط هواپیما
                        <MdOutlineArrowForwardIos size={20} className="rotate-90 text-text-sub-item"/>
                        </span>

                        {/* Submenus : */}
                        <div
                            className="absolute w-[120px] mt-3 top-full right-0 bg-white p-0.5 box-shadow-alibaba
                            rounded-lg flex flex-col gap-0.5 transition-all ease-in-out duration-150
                            group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                            opacity-0 invisible -translate-y-2
                            delay-100
                            ">
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">پرواز
                                داخلی</Link>
                            <span className="w-full block h-px bg-[#4B525933]"></span>
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">پرواز
                                خارجی</Link>
                        </div>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative">
                        <span className="flex items-center gap-1 cursor-pointer">
                            بلیط قطار
                        </span>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative">
                        <span className="flex items-center gap-1 cursor-pointer">
                            بلیط اتوبوس
                        </span>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative group">
                        <span className="flex items-center gap-1 cursor-pointer">
                            اقامت
                        <MdOutlineArrowForwardIos size={20} className="rotate-90 text-text-sub-item"/>
                        </span>

                        {/* Submenus : */}
                        <div
                            className="absolute w-[120px] mt-3 top-full right-0 bg-white p-0.5 box-shadow-alibaba
                            rounded-lg flex flex-col gap-0.5 transition-all ease-in-out duration-150
                            group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                            opacity-0 invisible -translate-y-2
                            delay-100
                            ">
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">هتل</Link>
                            <span className="w-full block h-px bg-[#4B525933]"></span>
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">ویلا
                                و اقامتگاه</Link>
                        </div>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative">
                        <span className="flex items-center gap-1 cursor-pointer">
                            تور
                        </span>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative">
                        <span className="flex items-center gap-1 cursor-pointer">
                            ویزا
                        </span>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative">
                        <span className="flex items-center gap-1 cursor-pointer">
                            پنل آژانسی
                        </span>
                    </div>
                    <span className="w-px h-6 bg-[#E0E0E0]"></span>
                    <div className="nav-item relative group">
                        <span className="flex items-center gap-1 cursor-pointer">
                            بیشتر
                        <MdOutlineArrowForwardIos size={20} className="rotate-90 text-text-sub-item"/>
                        </span>

                        {/* Submenus : */}
                        <div
                            className="absolute w-[120px] mt-3 top-full right-0 bg-white p-0.5 box-shadow-alibaba
                            rounded-lg flex flex-col gap-0.5 transition-all ease-in-out duration-150
                            group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                            opacity-0 invisible -translate-y-2
                            delay-100
                            ">
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">علی
                                بابا پلاس</Link>
                            <span className="w-full block h-px bg-[#4B525933]"></span>
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">مجله
                                علی بابا</Link>
                            <span className="w-full block h-px bg-[#4B525933]"></span>
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">بیمه
                                مسافرتی</Link>
                            <span className="w-full block h-px bg-[#4B525933]"></span>
                            <Link href=""
                                  className="sub-item p-2 rounded-lg transition-all ease-in-out duration-150 hover:bg-[#4B52591A]">سفر
                                اقساطی</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-left flex items-center gap-5">
                    <span className="nav-left-item flex items-center gap-1 cursor-pointer">
                        <FaRegQuestionCircle size={20}/>
                        مرکز پیشتیبانی آنلاین
                    </span>
                    <span className="nav-left-item flex items-center gap-1 cursor-pointer">
                        <MdOutlineLuggage size={20}/>
                        سفر های من
                    </span>
                    <span
                        onClick={showLoginModal}
                        className="nav-left-item flex items-center gap-1 cursor-pointer">
                        <FaRegUser size={20}/>
                        ورود یا ثبت نام
                    </span>
                </div>
            </div>
        </div>
    )
}