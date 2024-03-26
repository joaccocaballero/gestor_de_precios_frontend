'use client'

import React, { useRef, useState, useEffect } from 'react';
import { getProductByBarcodeOrName } from '../../../../services/products/productsEndpoints';
import { debounce } from 'lodash'; // Importa la función de debounce de la librería lodash
import Swal from 'sweetalert2';

// Componente para renderizar cada fila de la tabla
const ProductoRow = ({ name, costPrice, publicPrice }) => (
  <tr>
    <td>{name}</td>
    <td>${costPrice}</td>
    <td>${publicPrice}</td>
  </tr>
);

export default function Consulta() {
  const inputRef = useRef(null);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
    inputRef.current.focus();
    setResultado(null);
  };

  const handleInputBlur = (event) => {
    event.preventDefault();
    inputRef.current.value = '';
  };

  return (
    <main className="flex justify-center flex-col p-4">
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl font-bold">Consulta de Precio</h1>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-full flex flex-col items-center mt-6">
          <input
            type="text"
            placeholder="Ingrese código o nombre del producto"
            className="input input-bordered input-accent w-[90%]"
            ref={inputRef}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
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
                      <th className='font-bold text-xl'>Precio Costo</th>
                      <th className='font-bold text-xl'>Precio Público</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    resultado.sort().map((producto, index) => {
                      return(
                        <ProductoRow key={index} {...producto} />
                      )
                      })
                   }
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



// const [productos] = useState([
//   {
//     name: 'REXONA ODORONO CREMA',
//     barcode: 77947457,
//     cost_price: 80,
//     public_price: 150,
//     created_at: new Date(),
//     updated_at: new Date()
//   },
//   {
//     name: 'REXONA INVISIBLE ROLL ON',
//     barcode: 47894794,
//     cost_price: 90,
//     public_price: 180,
//     created_at: new Date(),
//     updated_at: new Date()
//   },
// ]);
