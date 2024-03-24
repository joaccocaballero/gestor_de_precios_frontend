'use client'
import React, { useRef } from 'react';

export default function Agregar() {
  const nombreRef = useRef(null);
  const precioRef = useRef(null);
  const codigoRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = nombreRef.current.value;
    const precio = precioRef.current.value;
    const codigo = codigoRef.current.value;
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Nombre:', nombre);
    console.log('Precio:', precio);
    console.log('Código:', codigo);
  };

  return (
    <main className="flex justify-center flex-col p-4">
      <div className="flex justify-center mt-5 ">
        <h1 className="text-2xl font-bold">Agregar un Producto</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col mt-6">
        <div className="w-full flex flex-col items-center">
          <div className='flex items-start w-[80%]'>
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Nombre</label>
          </div>
            <input
                type="text"
                id="nombre"
                ref={nombreRef}
                placeholder="Ingrese el nombre del producto"
                className="input input-bordered input-accent w-[80%]"
            />
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <div className='flex items-start w-[80%]'>
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Precio</label>
          </div>
          <input
            type="text"
            id="precio"
            ref={precioRef}
            placeholder="Ingrese el precio del producto"
            className="input input-bordered input-accent w-[80%]"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-4">
        <div className='flex items-start w-[80%]'>
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Código</label>
          </div>
          <input
            type="text"
            id="codigo"
            ref={codigoRef}
            placeholder="Ingrese el código del producto"
            className="input input-bordered input-accent w-[80%]"
          />
        <div className="w-[80%] mt-6 flex justify-end">
          <button type="submit" className="btn btn-success text-white">CONFIRMAR</button>
        </div>
        </div>
      </form>
    </main>
  );
}
