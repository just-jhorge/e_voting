import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import LogoutButton from "../buttons/LogoutButton";

const Navbar = async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    console.log(session);

    return (
        <nav className="w-full h-14 bg-white flex items-center justify-center shadow-md">
            <div className="container h-full flex items-center justify-between">
                <h3 className="font-bold text-xl uppercase">
                    <Link href="/">Ballotio</Link>
                </h3>
                <div className="flex space-x-2">
                    {!session ? (
                        <>
                            <Link
                                href="/auth/signin"
                                className="bg-slate-800 flex items-center justify-center text-sm text-white py-2 px-3 rounded-sm"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="bg-slate-800 flex items-center justify-center text-sm text-white py-2 px-3 rounded-sm"
                            >
                                Create Account
                            </Link>
                        </>
                    ) : (
                        <LogoutButton />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
