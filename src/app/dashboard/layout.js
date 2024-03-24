
export default function RootLayout({ children }) {
  return (
    <div lang="en">
        <header className="p-2">
            <div className="navbar bg-base-300 rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/dashboard/consulta">Consultar</a></li>
                        <li><a href="/dashboard/agregar">Agregar</a></li>
                        <li><a href="/dashboard/modificar">Modificar</a></li>
                        <li><a className="font-bold text-error">Cerrar Sesión</a></li>
                        
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href="/dashboard/consulta">Gestor de Precios</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/dashboard/consulta">Consultar</a></li>
                        <li><a href="/dashboard/agregar">Agregar</a></li>
                        <li><a href="/dashboard/modificar">Modificar</a></li>
                    </ul>
                </div>
                <div className="hidden lg:navbar-end lg:flex">
                    <a className="btn btn-error btn-sm text-white">CERRAR SESIÓN</a>
                </div>
            </div>
      </header>
      {children}
    </div>
  );
}
