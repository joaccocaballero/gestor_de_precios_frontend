'use client'

import ProductoItemModificar from '@/components/ProductoItemModificar';
import React, { useRef, useState, useEffect } from 'react';


export default function Modificar() {
  const inputRef = useRef(null);
  const [productos] = useState([
    { nombre: 'Desodorante Rexona', precio: 100, codigo: '77947457' }
  ]);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez después de que el componente se monte

  const handleInputChange = () => {
    const codigoBuscado = inputRef.current.value;
    const productoEncontrado = productos.find(producto => producto.codigo === codigoBuscado);

    if (productoEncontrado) {
      setResultado(<ProductoItemModificar {...productoEncontrado} />);
    } else {
      setResultado("Producto no encontrado");
    }
  };

  const clearSearch = () => {
    inputRef.current.value = '';
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
    setResultado(null);
  };

  return (
    <main className="flex justify-center flex-col p-4">
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl font-bold">Modificar Producto</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center mt-6">
          <input
            type="text"
            placeholder="Ingrese código del producto"
            className="input input-bordered input-accent w-[90%]"
            ref={inputRef}
            onChange={handleInputChange}
          />
          <button className='btn mt-3 btn-base-200 w-[90%]' onClick={clearSearch}>
            Limpiar búsqueda
          </button>
        </div>
      </div>
      <section className='p-5 text-lg justify-center flex flex-col'>
        {resultado !== null && (
          <>
            <h2 className="text-2xl mt-8 font-bold">Resultado</h2>
            <div className="overflow-x-auto mt-4">
              {resultado === "Producto no encontrado" ? (
                <p>{resultado}</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th className='font-bold text-xl'>Nombre</th>
                      <th className='font-bold text-xl'>Precio</th>
                      <th className='font-bold text-xl'>Código</th>
                      <th className='font-bold text-xl'>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultado}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
