import React from "react"
import NavBar from "@/components/Navbar"

export default function UnauthenticatedPage() {
    return (
        <div>
            <NavBar titulo={"Oops.. :("} showHomeButton={false}/>
                <div className="h-100 flex items-center justify-center">
                <div className="p-8 rounded-xl shadow-md bg-base-200 max-w-md">
                        <div className="items-center justify-center flex p-1 mb-3"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>

                        <h1 className="text-2xl font-bold mb-4 text-black text-center">Acceso Denegado</h1>
                        <p className="text-gray-700 mb-4">No tienes permisos para acceder a esta página.</p>
                    </div>
                </div>
        </div>
    )
}