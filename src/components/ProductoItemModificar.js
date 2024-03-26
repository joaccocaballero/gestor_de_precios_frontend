import { useRouter } from 'next/navigation';

// Componente para renderizar cada fila de la tabla
const ProductoItemModificar = ({ name, costPrice, publicPrice, id}) => {
    const router = useRouter();
    return(
        <tr>
            <td className='text-black text-center text-2xl'>{name}</td>
            <td className='text-black text-center text-4xl'> ${costPrice}</td>
            <td className='text-black text-center font-bold text-4xl'>${publicPrice}</td>
            <td>
                <button className='btn btn-sm text-white btn-primary' onClick={()=>router.push('/dashboard/modificar/confirmar?idProductoDb='+id)}>Modificar</button>
            </td>
        </tr>
    )
}

export default ProductoItemModificar;