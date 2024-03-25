'use client'
import React, { useEffect, useRef , useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getProductByDatabaseId, updateProductByDatabaseId} from '../../../../../services/products/productsEndpoints';
import Swal from 'sweetalert2';

export default function ConfirmarModificacion() {
  const searchParams = useSearchParams()
  const router = useRouter();
  const [producto, setProducto] = useState(null);
  const nombreRef = useRef(null);
  const precioCostoRef = useRef(null);
  const precioPublicoRef = useRef(null);
  const codigoRef = useRef(null);

  const handleConfirmar = async () => {
    try {
      const item = {
        name: nombreRef.current.value,
        costPrice: precioCostoRef.current.value,
        publicPrice: precioPublicoRef.current.value,
        barcode: codigoRef.current.value
      }
      const response = await updateProductByDatabaseId(producto.id, item);
      if(response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Producto modificado con éxito.",
          showConfirmButton: false,
          timer: 1000,
        });
        router.back();
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al modificar el producto.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  }

  const handleGoBack = () => {
    router.back();
  };

  const fetchDatosProducto = async () => {
    const idProductoDb = searchParams.get('idProductoDb');
    const producto = await getProductByDatabaseId(idProductoDb);
    if(producto.status !== 200) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al cargar los datos del producto.",
      });
    }else{
      setProducto(producto.data);
    }
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Desea eliminar este producto?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#dc3545",  
      cancelButtonText: "Cancelar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      }
    });
  }

  useEffect(() => {
    if(producto){
      nombreRef.current.value = producto.name;
      precioCostoRef.current.value = producto.costPrice;
      precioPublicoRef.current.value = producto.publicPrice;
      codigoRef.current.value = producto.barcode;
    }
  }, [producto]);

  useEffect(() => {
    fetchDatosProducto();
  }, []);

  return (
    <main className="flex justify-center flex-col p-4">
        <div class="navbar flex justify-between items-center">
        <div class="back flex items-center" onClick={handleGoBack}>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 12H6"></path>
            <path d="M12 18l-6-6 6-6"></path>
            </svg>
            <span class="text-lg font-bold">Volver</span>
        </div>
        </div>

      <div className="flex justify-center mt-5 ">
        <h1 className="text-2xl font-bold">Confirmar Modificación</h1>
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
            inputMode="numeric" 
            id="precio"
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
        <div className="w-[80%] mt-6 flex justify-between">
            <button type="button" className="btn btn-warning text-black" onClick={()=>handleDelete()}>ELIMINAR</button>
          <button type="button" className="btn btn-success text-white" onClick={()=>handleConfirmar()}>CONFIRMAR</button>
        </div>
        </div>
      </form>
    </main>
  );
}
