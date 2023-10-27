import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "E-Voting System",
    description:
        "An application built for organising electronic voting in Nursing and Midwifery Training College, Kumasi.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <>{children}</>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
