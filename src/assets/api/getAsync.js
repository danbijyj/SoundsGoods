const SPOT_CLIENT_ID = import.meta.env.VITE_SPOT_CLIENT_ID;
const SPOT_CLIENT_SECRET = import.meta.env.VITE_SPOT_CLIENT_SECRET;

export const getSpotifyToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + btoa(`${SPOT_CLIENT_ID}:${SPOT_CLIENT_SECRET}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ grant_type: 'client_credentials' }),
    });

    const data = await response.json();
    return data.access_token;
};

export const searchAlbums = async (query, token) => {
    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=20`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const result = await response.json();
    return result.albums?.items || [];
};
