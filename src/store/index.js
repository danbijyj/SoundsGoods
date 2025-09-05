import { create } from 'zustand';
import main_Artist_data from '../assets/api/main_Artist_data';
export const usemainAlbumStore = create((set, get) => {
    return {
        mainAlAtData: main_Artist_data,
    };
});
