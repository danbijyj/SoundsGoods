import React from 'react';
import { useAlbumStore } from '../../store';
// import useAlbumStore from '../store';

const Main = () => {
    const { query, setQuery, fetchAlbums, albums, loading } = useAlbumStore();

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Spotify Album Search (zustand, auto token)</h1>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for an album"
                    style={{ marginRight: '0.5rem', padding: '0.5rem' }}
                />
                <button onClick={fetchAlbums}>Search</button>
            </div>

            {loading ? (
                <p>Loading albums...</p>
            ) : albums.length === 0 ? (
                <p>No albums found.</p>
            ) : (
                <div style={{ marginTop: '1rem' }}>
                    {albums.map((album) => (
                        <div key={album.id} style={{ marginBottom: '1.5rem' }}>
                            <h3>{album.name}</h3>
                            <p>Artist: {album.artists.map((a) => a.name).join(', ')}</p>
                            <p>Release Date: {album.release_date}</p>
                            {album.images && album.images.length > 0 && (
                                <img src={album.images[0].url} alt={album.name} width={200} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Main;
