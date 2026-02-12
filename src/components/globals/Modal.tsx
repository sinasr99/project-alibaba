"use client"

import {FC, useContext} from "react";
import {IoClose} from "react-icons/io5";
import {ModalContext} from "@/context/ModalContext";

const Modal: FC = () => {
    const {isShow, closeMoal, modalChildren, width, height} = useContext(ModalContext)

    return (
        <>
           <span
               onClick={closeMoal}
               className={`modal-page transition-all ease-in-out duration-200 backdrop-blur-[1px] fixed top-0 right-0 bottom-0 left-0
                ${isShow ? "visible opacity-100 bg-modal-color" : "invisible opacity-0"}`}>
           </span>

            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`
                }}
                className={`
            modal bg-white rounded-lg p-4 fixed top-0 right-0 left-0 bottom-0 m-auto
             ${isShow ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-4"}
             transition-all ease-in-out duration-200
            `}>
                <div className="modal-header flex items-center justify-end">
                    <IoClose onClick={closeMoal} className="close-button transition-all ease-in-out duration-150
                    hover:scale-[1.1]
                    hover:text-rose-700
                    cursor-pointer
                    " size={30}/>
                </div>
                {modalChildren}
            </div>
        </>
    )
}

export default Modal