import React from "react";
import NavBar from "@/components/Navbar";

export default function NotFoundPage(){
    return( 
        <div>
            <NavBar/>
            <div className="h-100  flex items-center justify-center">
                <div className="p-8 w-[50vw] rounded-xl shadow-md  text-black bg-base-200 max-w-md">
                    <div className="items-center justify-center flex p-1 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-center">404</h1>
                    <p className="text-black mb-4 text-center">Página no encontrada</p>
                </div>
            </div>
        </div>
    )
}