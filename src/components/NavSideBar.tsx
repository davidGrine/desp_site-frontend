"use client";

import Link from "next/link";

interface NavSideBarProps {
    onClose: () => void;
}

export function NavSideBar({ onClose }: NavSideBarProps) {
    const handleBackgroundClick = () => {
        onClose();
    };

    const handleSidebarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <nav
            className="fixed inset-0 z-40 bg-black/60"
            onClick={handleBackgroundClick}
        >
            <div
                className="ml-auto h-full w-80 bg-white"
                onClick={handleSidebarClick}
            >
                <button
                    onClick={onClose}
                    className="text-3xl cursor-pointer"
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <ul>
                    <li className="link">
                        <Link href="/" onClick={onClose}>
                            <i className="bi bi-house"></i>
                            Home
                        </Link>
                    </li>

                    <li className="link">
                        <Link href="/posts" onClick={onClose}>
                            <i className="bi bi-c-square-fill"></i>
                            Posts
                        </Link>
                    </li>

                    <li className="link">
                        <Link href="/registration" onClick={onClose}>
                            <i className="bi bi-person-circle"></i>
                            Register
                        </Link>
                    </li>

                    <li className="link">
                        <Link href="/login" onClick={onClose}>
                            <i className="bi bi-person-circle"></i>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}