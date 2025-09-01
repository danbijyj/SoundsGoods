// store/albumStore.js
import { create } from 'zustand';
import { getSpotifyToken, searchAlbums } from './getAsync';

export const useAlbumStore = create((set, get) => ({
    token: null,
    albums: [],
    query: '',
    loading: false,
    error: null,

    setQuery: (query) => set({ query }),

    // 토큰이 없으면 자동으로 발급 후 앨범 검색
    fetchAlbums: async () => {
        let { token, query } = get();
        if (!query) return;

        // 토큰 없으면 자동 발급
        if (!token) {
            token = await getSpotifyToken();
            set({ token });
        }

        set({ loading: true });
        const albums = await searchAlbums(query, token);
        set({ albums, loading: false });
    },
}));
