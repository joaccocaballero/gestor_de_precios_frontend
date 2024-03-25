'use client'
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
    const router = useRouter();
    const handleLogout = async () => {
        localStorage.clear()
        await fetch('/api/logout');
        router.push('/')
    };
  return (
    <div lang="en">
        <header className="p-2">
            <div className="navbar bg-base-300 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-5 rounded-box w-52">
                            <li><a href="/dashboard/consulta" className="font-bold p-2 text-xl">Consultar</a></li>
                            <li><a href="/dashboard/agregar" className="font-bold p-2 text-xl">Agregar</a></li>
                            <li><a href="/dashboard/modificar" className="font-bold p-2 text-xl">Modificar</a></li>
                          
                            <li><a className="font-bold text-error text-lg p-2 mt-3" onClick={()=>handleLogout()}>Cerrar Sesión</a></li>
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl" href="/dashboard/consulta">Gestor de Precios</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/dashboard/consulta" className="font-bold text-lg">Consultar</a></li>
                        <li><a href="/dashboard/agregar" className="font-bold text-lg">Agregar</a></li>
                        <li><a href="/dashboard/modificar" className="font-bold text-lg">Modificar</a></li>
                    </ul>
                </div>

                <div className="hidden lg:navbar-end lg:flex">
                    <a className= "btn btn-error btn-sm text-white font-bold" onClick={()=>handleLogout()}>Cerrar Sesión</a>
                </div>
            </div>
      </header>
      {children}
    </div>
  );
}
