import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
    title: "E-Voting System",
    description:
        "An application built for organising electronic voting in Nursing and Midwifery Training College, Kumasi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <>{children}</>
                <Footer />
            </body>
        </html>
    );
}
