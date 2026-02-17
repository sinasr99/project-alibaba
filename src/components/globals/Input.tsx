"use client"

import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {checkInputs} from "@/validations/checkInputs";

type InputProps = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    hasError: boolean,
    setHasError: Dispatch<SetStateAction<boolean>>
}

const Input: FC<InputProps> = ({setValue, value, hasError, setHasError}) => {
    const [isFocused, setIsFocused] = useState(false)

    const inputRef = useRef<HTMLInputElement | null>(null)

    const focusInput = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        console.log("!checkInputs(value) => ", !checkInputs(value))
        setHasError(!checkInputs(value))
    }, [value])

    useEffect(() => {
        console.log("has error => ", hasError)
    }, [hasError]);

    return (
        <div className={`input-wrapper relative w-[326px] h-12 p-2 rounded-lg border-solid ${isFocused ? "border-black" : "border-input"} border-[1px]`}>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                maxLength={value.startsWith("9") ? 10 : 11}
                ref={inputRef}
                dir="ltr" type="text" className="h-full w-[86%] transition-all ease-in-out duration-150"/>
            <span
                onClick={focusInput}
                className={`placeholder transition-all ease-in-out duration-150 absolute bg-white px-2 ${(isFocused || value.length) ? "-top-12 text-xs" : "top-0"} bottom-0 right-2 my-auto h-fit w-fit text-input`}>شماره موبایل</span>
            <span
                className="pre-number text-input px-3 flex items-center gap-1.5 absolute top-0 bottom-0 left-0 my-auto">
                <span className="w-px h-6 bg-input"></span>
                <span dir="ltr">+98</span>
            </span>

            {/* Error Test : */}
            {
                value.length
                    ?
                    hasError
                        ?
                        null
                        : <span
                            className={`absolute top-full mt-2 right-0 text-xs ${isFocused ? "text-input" : "text-rose-700"}`}>شماره موبایل باید با 09 یا ۹ شروع شده و بیش از ۱۱ رقم نباشد.</span>
                    :
                    <span
                        className={`absolute top-full mt-2 right-0 text-xs text-input`}>شماره موبایل را وارد کنید</span>
            }
        </div>
    )
}

export default Input