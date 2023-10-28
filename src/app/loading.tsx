import React from "react";
import { RotatingLines } from "react-loader-spinner";

export default function loading() {
    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <RotatingLines strokeColor="grey" strokeWidth="4" animationDuration="0.75" width="72" visible={true} />
        </main>
    );
}
