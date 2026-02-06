import "./globals.css";
import {ReactNode} from "react";
import Navbar from "@/components/globals/Navbar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html>
        <body dir="rtl" className="font-dana">
        <Navbar/>
        {children}
        </body>
        </html>
    );
}