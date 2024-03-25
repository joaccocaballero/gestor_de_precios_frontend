export async function getProductByBarcodeOrName(codeOrName) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products/getProductInfo?data='+ codeOrName, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        return {status: response.status, data: data}

    } catch (error) {
        throw error //Rethrow the error to be caught in the component
    }
}

export async function getProductByDatabaseId(id) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products/getProductInfoByDatabaseId?productId='+ id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        return {status: response.status, data: data}

    } catch (error) {
        throw error //Rethrow the error to be caught in the component
    }
}

export async function updateProductByDatabaseId(id, product) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products/updateProduct?productId='+ id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.error)
        }
        return {status: response.status, data: data}
    } catch (error) {
        throw error //Rethrow the error to be caught in the component
    }
}

export async function addNewProduct(product) {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/products/addNewProduct', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.error)
        }
        return {status: response.status, data: data}
    } catch (error) {
        throw error //Rethrow the error to be caught in the component
    }
}