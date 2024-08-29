'use client';

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { useEffect, useState } from "react";
import { MOBILE_WIDTH } from "@/utils/constants";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (windowWidth > MOBILE_WIDTH) {
            setOpen(false);
        }

        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, []);

    const tabs = [
        { name: "Home", path: "/" },
        { name: "Experience", path: "/experience" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    if (windowWidth < MOBILE_WIDTH) {
        return (
            <div className="relative">
                <button className="p-2 navbar-mobile-button" onClick={() => setOpen(true)}><IoIosMenu size={40} /></button>
                {open ? (
                    <div className={`${open ? "absolute top-0 left-0 primary-bg z-[1] w-dvw h-dvh border border-black" : "hidden"}`}>
                        <button className="p-2 navbar-mobile-button" onClick={() => setOpen(false)}><IoMdClose size={40} /></button>
                        <div className="navbar-mobile-menu">
                            {tabs.map((tab) => <Link key={tab.name} href={tab.path} onClick={() => setOpen(false)}>{tab.name}</Link>)}
                        </div>
                        <div className="absolute bottom-0 right-0 -translate-x-4 -translate-y-4">
                            <ThemeSwitcher />
                        </div>
                    </div>
                ) : <></>}
            </div>
        )
    }

    return (
        <div className="navbar-desktop relative px-[200px]">
            <div className="py-2 lg:px-9 2xl:px-16 w-full flex justify-around">
                {tabs.map((tab) => <Link key={tab.name} href={tab.path}>{tab.name}</Link>)}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-5">
                <ThemeSwitcher />
            </div>
        </div>
    )
}