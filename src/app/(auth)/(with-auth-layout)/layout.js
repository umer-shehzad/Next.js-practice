"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import './styles.css';

const navLinks = [
    { name: 'Register', href: "/register" },
    { name: 'Login', href: "/login" },
    // { name: 'Froget Password', href: "/forget-password" },
];

export default function AuthLayout({ children }) {
    const pathname = usePathname();
    return (
        <div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {/* <h2>
                Inner Layout
            </h2> */}
            {children}
        </div>
    )
}