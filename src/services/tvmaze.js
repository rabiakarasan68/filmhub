const API_URL = "https://api.tvmaze.com";

export async function getShows() {
    const response = await fetch(`${API_URL}/shows`);

    if(!response.ok) {
        throw new Error("Diziler alınamadı.");
    }

    const data = await response.json(); 

    return data; 
}
