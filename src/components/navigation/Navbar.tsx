import React from "react";
import Link from "next/link";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="w-full h-14 sm:h-16 bg-white flex items-center justify-center shadow-md">
            <div className="container h-full flex items-center justify-between">
                <h3 className="font-bold text-xl">Ballotio</h3>
                <ul className="hidden sm:flex items-center gap-10">
                    <li>
                        <Link href="#introduction">About Us</Link>
                    </li>
                    <li>
                        <Link href="#features">Features</Link>
                    </li>
                    <li>
                        <Link href="#pricing">Pricing</Link>
                    </li>
                </ul>
                <div>
                    <Link
                        href="/dashboard"
                        className="bg-slate-800 flex items-center justify-center text-sm text-white py-2 px-3 rounded-sm"
                    >
                        Sign in
                    </Link>
                    {/* <Button variant="destructive">Logout</Button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
