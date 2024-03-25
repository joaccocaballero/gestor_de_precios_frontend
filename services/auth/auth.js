
export default async function logInUser(user) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(response)
        return {status: response.status, data};
    } catch (error) {
        throw error;
    }
}

export async function logOutUser() {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/logOut', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        credentials: "include",
    })
    const data = await response.json();
    return data 
}
