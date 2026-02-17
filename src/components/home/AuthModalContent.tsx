"use client"

import {FC, useState} from "react";
import Input from "@/components/globals/Input";
import {FiInfo} from "react-icons/fi";
import Link from "next/dist/client/link";

const AuthModalContent: FC = () => {
    const [phone, setPhone] = useState("")
    const [phoneHasError, setPhoneHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const sendCode = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="modal-body flex flex-col items-center">
            <h3 className="font-bold text-xl mb-3">ورود یا ثبت‌نام</h3>
            <p className="text-text-navbar text-lg mb-12">برای ادامه شماره موبایل خود را وارد کنید.</p>
            <Input
                value={phone}
                setValue={setPhone}
                hasError={phoneHasError}
                setHasError={setPhoneHasError}
            />
            <div className="rule-content mt-[56px] flex items-start gap-1 text-[#999DA1] fill-[#999DA1]">
                <FiInfo size={20}/>
                <p className="text-sm">
                    استفاده از علی‌بابا به معنی پذیرش <Link
                    className="text-[#278CE0] text-sm transition-all ease-in-out duration-150 hover:bg-[#F2F9FF] hover:border-[#CFE6F9] border-transparent border-solid border-[1px] px-1.5 py-0.5 rounded-lg"
                    href="#">قوانین و
                    مقررات</Link> این سرویس است.
                </p>
            </div>
            <button
                disabled={phoneHasError}
                onClick={sendCode}
                className={`w-[326px] h-[46px] my-4 bg-[] flex items-center justify-center 
                ${phoneHasError ? "cursor-not-allowed bg-[#79B8EC]" : "bg-[#0077DB] hover:bg-[#00569E] cursor-pointer"}
                 transition-all ease-in-out duration-150 text-white rounded-lg`}>
                {
                    isLoading
                    ?
                        <span className="loader"></span>
                        :
                        "تایید و دریافت کد"
                }
            </button>
            <button className="text-[#278CE0] cursor-pointer text-sm transition-all ease-in-out duration-150 hover:bg-[#F2F9FF] hover:border-[#CFE6F9]
             border-transparent border-solid border-[1px] px-1.5 py-0.5 rounded-lg">ورود با کلمه عبور
            </button>
        </div>
    )
}

export default AuthModalContent