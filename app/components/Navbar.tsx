import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const { data: session } = useSession();
    //console.log({ session });

    return (
        <div className="bg-gray-100 shadow-lg">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
                <div>
                    <Link className="text-xl font-bold text-gray-800 uppercase hover:text-gray-700 mx-3" href="#">Blog Task</Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex items-center bg-gray-200 rounded-lg">
                        <svg className="w-6 h-6 text-gray-600 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.5 14a6.5 6.5 0 11-4.6 1.9" />
                        </svg>
                        <input type="text" placeholder="Search" className="py-2 px-4 w-80 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                </div>
                <div className="flex">
                    <Link className="text-gray-800 hover:text-gray-700 mx-3" href="#">Blog</Link>
                    <div className="ml-auto flex gap-2">
                        {session?.user ? (
                            <>
                                <p className="text-sky-600"> {session.user.name}</p>
                                <button className="text-gray-800 hover:text-gray-700 mx-3" onClick={() => signOut()}>
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <button className="text-gray-800 hover:text-gray-700 mx-3" onClick={() => signIn()}>
                                Sign In
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navbar