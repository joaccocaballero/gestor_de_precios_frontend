'use client'
import { useRef, useState } from 'react';
import logInUser from '../../services/auth/auth';
import Swal from 'sweetalert2';
import Loading from '@/components/Loading';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [Cargando, setCargando] = useState(false);
  const usernameRef = useRef(null);
  const route = useRouter();
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
      try {
        setCargando(true)
        let usuario = {username: usernameRef.current.value, password:  passwordRef.current.value};
        const response = await logInUser(usuario);
        switch(response.status){
           case 200:
               if(response.data){
                   const data = response.data;
                   localStorage.setItem('userToken', data.token);
                   route.push('/dashboard/consulta');
               }
               break;
               case 401:
                   throw new Error('Credenciales no válidas!')
               default:
                   setCargando(false)
                   Swal.fire({
                       icon: 'error',
                       title: 'Oops...',
                       text: 'Ha ocurrido un error, intente más tarde.',
                       confirmButtonColor: '#00356E',
                   });
                   break;
        }

      } catch (error) {
           setCargando(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                confirmButtonColor: '#00356E',
            });
      }
   
  };

  return (
    <>
      <header className='px-2'>
        <div className="navbar bg-base-300 mt-2 px-2 rounded-lg">
          <button className="btn btn-ghost text-xl">Gestor de Precios</button>
        </div>
      </header>
      <main className="flex justify-center flex-col p-4">
       {
        (!Cargando) ? 
        <> 
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
      </>
      :
      <Loading/>
       }
      </main>
    </>
  );
}
