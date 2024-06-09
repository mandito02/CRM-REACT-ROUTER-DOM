
export async function getClients() {

    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()
    return result;

}

export async function getClient(id) {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()
    return result;

}

export async function addClient(data){
    try {
        const response = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        await response.json()
    }
    catch (error) {
        return error
    }
}

export async function putClient(id, data){
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        await response.json()
    }
    catch (error) {
        return error
    }
}

export async function deleteClient(id){
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await response.json()
    }
    catch (error) {
        return error
    }
}