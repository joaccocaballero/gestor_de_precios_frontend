import { useRouter } from 'next/navigation';

// Componente para renderizar cada fila de la tabla
const ProductoItemModificar = ({ nombre, precio, codigo }) => {
    const router = useRouter();
    return(
        <tr>
            <td>{nombre}</td>
            <td>${precio}</td>
            <td>{codigo}</td>
            <td>
            <button className='btn btn-sm btn-primary' onClick={()=>router.push('/dashboard/modificar/confirmar')}>Modificar</button>
            </td>
        </tr>
    )
}

export default ProductoItemModificar;