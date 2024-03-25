'use client'
import React, { useRef } from 'react';
import { addNewProduct } from '../../../../services/products/productsEndpoints';
import Swal from 'sweetalert2';

export default function Agregar() {
  const nombreRef = useRef(null);
  const precioCostoRef = useRef(null);
  const precioPublicoRef = useRef(null);
  const codigoRef = useRef(null);

  const clearFields = () => {
    nombreRef.current.value = '';
    precioCostoRef.current.value = '';
    precioPublicoRef.current.value = '';
    codigoRef.current.value = '';
  }

  const handleSubmit = async (event) => {
    const product = {
      name : nombreRef.current.value,
      costPrice : precioCostoRef.current.value,
      publicPrice : precioPublicoRef.current.value,
      barcode : codigoRef.current.value
    }
    try {
      const response = await addNewProduct(product);
      console.log(response)
      if(response.status===200){
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado',
          text: 'El producto se ha agregado correctamente',
          showConfirmButton: false,
          timer: 1000
        });
        clearFields();
      }
    } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message,
        });
    }
  };

  return (
    <main className="flex justify-center flex-col p-4">
      <div className="flex justify-center mt-5 ">
        <h1 className="text-2xl font-bold">Agregar Producto</h1>
      </div>
      <form className="flex justify-center items-center flex-col mt-6">
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
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Precio Costo</label>
          </div>
          <input
            type="number"
            id="precio"
            inputMode="numeric"
            pattern="\d*" 
            ref={precioCostoRef}
            placeholder="Ingrese el precio costo del producto"
            className="input input-bordered input-accent w-[80%]"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <div className='flex items-start w-[80%]'>
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Precio Público</label>
          </div>
          <input
            type="number"
            id="precio"
            inputMode="numeric"
            pattern="\d*" 
            ref={precioPublicoRef}
            placeholder="Ingrese el precio público del producto"
            className="input input-bordered input-accent w-[80%]"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-4">
        <div className='flex items-start w-[80%]'>
            <label htmlFor="nombre" className="block font-medium text-gray-700 mb-1">Código</label>
          </div>
          <input
            type="number"
            id="codigo"
            inputMode="numeric"
            pattern="\d*" 
            ref={codigoRef}
            placeholder="Ingrese el código del producto"
            className="input input-bordered input-accent w-[80%]"
          />
        <div className="w-[80%] mt-6 flex justify-end">
          <button type="button" className="btn btn-success text-white" onClick={()=>handleSubmit()}>CONFIRMAR</button>
        </div>
        </div>
      </form>
    </main>
  );
}
