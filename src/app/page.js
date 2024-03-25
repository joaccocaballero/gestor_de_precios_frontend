'use client'
import { useRef } from 'react';

export default function Page() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    
    // Aquí puedes realizar la lógica de inicio de sesión utilizando el cliente (client)
    // Por ejemplo, puedes enviar una solicitud al servidor para autenticar el usuario
    
    // Ejemplo de cómo utilizar client:
    // client.login({ username, password });
  };

  return (
    <>
      <header className='px-2'>
        <div className="navbar bg-base-300 mt-2 px-2 rounded-lg">
          <button className="btn btn-ghost text-xl">Gestor de Precios</button>
        </div>
      </header>
      <main className="flex justify-center flex-col p-4">
        <div className="flex justify-center mt-5 ">
          <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col mt-6">
          <div className="w-full flex flex-col items-center">
            <div className='flex items-start w-[60%]'>
              <label htmlFor="username" className="block font-medium text-gray-700 mb-1">Nombre de Usuario</label>
            </div>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              placeholder="Ingrese su nombre de usuario"
              className="input input-bordered input-accent w-[60%]"
              />
          </div>
          <div className="w-full flex flex-col items-center mt-4">
            <div className='flex items-start w-[60%]'>
              <label htmlFor="password" className="block font-medium text-gray-700 mb-1">Contraseña</label>
            </div>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="Ingrese su contraseña"
              className="input input-bordered input-accent w-[60%]"
              />
          </div>
          <div className="w-[60%] mt-6 flex justify-end">
            <button type="submit" className="btn btn-success text-white">INICIAR SESIÓN</button>
          </div>
        </form>
      </main>
    </>
  );
}
