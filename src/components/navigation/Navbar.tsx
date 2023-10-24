import React from "react";
import { Button } from "../ui/button";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="fixed top-10 sm:top-12 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-1/2 h-14 sm:h-16 rounded-full bg-orange-400 flex items-center justify-center shadow-md">
            <div className="container flex items-center justify-between">
                <div>Ballotio</div>
                <div className="space-x-2">
                    <Button>Sign in</Button>
                    {/* <Button variant="destructive">Logout</Button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
