'use client'

import React, { useRef, useState, useEffect } from 'react';
import ProductoItemModificar from '@/components/ProductoItemModificar';
import { getProductByBarcodeOrName } from '../../../../services/products/productsEndpoints';
import { debounce } from 'lodash';
import Swal from 'sweetalert2';

export default function Modificar() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez después de que el componente se monte


  // Utiliza debounce para retrasar la ejecución de la función handleInputChange
  const delayedHandleInputChange = useRef(
    debounce(async (codigoNombre) => {
      try {
        const productosEncontrados = await getProductByBarcodeOrName(codigoNombre);
        if (productosEncontrados.status === 200) {
          setResultado(productosEncontrados.data);
        } else {
          setResultado("Producto no encontrado");
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
      }
    }, 500) // 500 milisegundos de retraso
  ).current;

  const handleInputChange = (event) => {
    const codigoNombre = event.target.value;
    if(codigoNombre != ''){
      delayedHandleInputChange(codigoNombre);
    }
  };


  const clearSearch = () => {
    inputRef.current.value = '';
    inputRef.current.focus(); // Enfocar el input cuando el componente se monta
    setResultado(null);
  };

  const handleInputBlur = (event) => {
    // Evita que el input pierda el foco cuando se hace clic en cualquier parte dentro del componente
    event.preventDefault();
    inputRef.current.value = '';
    // inputRef.current.focus(); // Enfocar el input cuando el componente se monta
  };

  return (
    <main className="flex justify-center flex-col p-4">
      <div className="flex justify-center mt-5">
        <h1 className="text-4xl font-bold">Modificar Producto</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center mt-6">
          <input
            type="text"
            placeholder="Ingrese código o nombre del producto"
            className="input input-bordered placeholder-black input-accent w-[90%]"
            ref={inputRef}
            onChange={handleInputChange}
            onBlur={(event)=>handleInputBlur(event)}
          />
          <button className='btn mt-3 btn-neutral w-[90%]' onClick={clearSearch}>
            Limpiar búsqueda
          </button>
        </div>
      </div>
      <section className='p-5 text-lg justify-center items-center flex flex-col'>
        {resultado !== null && (
          <div className='w-[80vw]'>
            <h2 className="text-2xl mt-8 font-bold">Resultado</h2>
            <div className="overflow-x-auto mt-4">
              {resultado === "Producto no encontrado" ? (
                <p>{resultado}</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th className='font-bold text-center text-black text-2xl'>Nombre</th>
                      <th className='font-bold text-center text-black text-2xl'>Precio Costo</th>
                      <th className='font-bold text-center text-black text-2xl'>Precio Público</th>
                      <th className='font-bold text-center text-black text-2xl'>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    resultado.sort().map((producto, index) => {
                      return(
                        <ProductoItemModificar key={index} {...producto} />
                      )
                      })
                   }
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
