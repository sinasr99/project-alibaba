import "./globals.css";
import {ReactNode} from "react";
import Navbar from "@/components/globals/Navbar";
import {ModalContextProvider} from "@/context/ModalContext";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html className="h-full">
        <body dir="rtl" className="font-dana bg-custom-white h-full">
        <ModalContextProvider>
            <Navbar/>
            {children}
        </ModalContextProvider>
        </body>
        </html>
    );
}