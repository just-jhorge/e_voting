import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 h-32 sm:h-16 text-white flex items-center justify-center text-xs sm:text-sm">
            <div className="container flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row items-center justify-between">
                <p className="text-center bg-slate-900 text-neutral-600">&copy; 2023. All rights reserved</p>
                <ul className="flex items-center gap-5">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Sitemap</li>
                </ul>
                <ul className="flex items-center gap-5">
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
