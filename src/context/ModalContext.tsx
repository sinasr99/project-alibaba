"use client"

import {createContext, FC, PropsWithChildren, ReactNode, useState} from "react";

type ModalContextType = {
    isShow: boolean,
    closeMoal: () => void,
    showModal: (children: ReactNode, width: number, height: number) => void,
    modalChildren: ReactNode,
    width: number,
    height: number,
}

const ModalContext = createContext<ModalContextType>({
    closeMoal: () => {},
    isShow: false,
    showModal: () => {},
    modalChildren: null,
    width: 0,
    height: 0
})

const ModalContextProvider: FC<PropsWithChildren> = ({children}) => {
    const[modalProperties, setModalProperties] = useState({
        width: 0,
        height: 0,
        isShow: false
    })
    const [modalChildren, setModalChildren] = useState<ReactNode>(<></>)

    const showModal = (modalChildren: ReactNode, width: number, height: number) => {
        setModalChildren(modalChildren)
        setModalProperties({isShow: true, width, height})
    }

    const closeMoal = () => setModalProperties({...modalProperties, isShow: false})

    return (
        <ModalContext.Provider value={{
            showModal,
            closeMoal,
            modalChildren,
            ...modalProperties
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalContextProvider}