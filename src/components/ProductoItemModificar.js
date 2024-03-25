import { useRouter } from 'next/navigation';

// Componente para renderizar cada fila de la tabla
const ProductoItemModificar = ({ name, costPrice, publicPrice, id}) => {
    const router = useRouter();
    return(
        <tr>
            <td>{name}</td>
            <td>${costPrice}</td>
            <td>${publicPrice}</td>
            <td>
                <button className='btn btn-sm text-white btn-primary' onClick={()=>router.push('/dashboard/modificar/confirmar?idProductoDb='+id)}>Modificar</button>
            </td>
        </tr>
    )
}

export default ProductoItemModificar;