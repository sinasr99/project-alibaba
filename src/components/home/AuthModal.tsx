"use client"

import {FC, useState} from "react";
import Input from "@/components/globals/Input";

const AuthModal: FC = () => {
    const [phone, setPhone] = useState("")

    return (
        <div className="modal-body flex flex-col items-center">
            <h3 className="font-bold text-xl mb-3">ورود یا ثبت‌نام</h3>
            <p className="text-text-navbar text-lg mb-12">برای ادامه شماره موبایل خود را وارد کنید.</p>
            <Input value={phone} setValue={setPhone}/>
        </div>
    )
}

export default AuthModal