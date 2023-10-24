import CTA from "./components/CTA";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import Pricing from "./components/Pricing";

export default function Home() {
    return (
        <main>
            <Introduction />
            <Features />
            <Pricing />
            <CTA />
        </main>
    );
}
