"use client";

import Image from "next/image";
import { ButtonTheme } from "./ButtonTheme";
import { useState } from "react";
import { NavSideBar } from "./NavSideBar";

export function Header() {
    const [isNavSideBarOpen, setIsNavSideBarOpen] = useState(false);

    const handleNavSideBarOpen = () => {
        setIsNavSideBarOpen(true);
    };

    const handleNavSideBarClose = () => {
        setIsNavSideBarOpen(false);
    };

    return (
        <>
            <header className="flex flex-row items-center justify-between min-h-37 bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="left__side flex flex-row items-center justify-between">
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        width={70}
                        height={70}
                        className="rounded-lg"
                        priority
                    />

                    <div className="logo__name">
                        Devlog.exe
                    </div>

                    <ButtonTheme />
                </div>

                <div className="right__side">
                    <button onClick={handleNavSideBarOpen}>
                        <i className="bi bi-list text-5xl cursor-pointer"></i>
                    </button>
                </div>
            </header>

            {isNavSideBarOpen && (
                <NavSideBar onClose={handleNavSideBarClose} />
            )}
        </>
    );
}