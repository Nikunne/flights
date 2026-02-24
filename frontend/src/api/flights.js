//Will fetch from the backend API
async function getFlights(airport) {
    const response = await fetch(`/api/flights?airport=${airport}`)
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    return (response.json())
}

export default getFlights