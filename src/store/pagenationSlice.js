import { create } from 'zustand';

const usePaginationStore = create((set, get) => ({
    pageData: [],
    totalCount: 0,
    perPage: 20,
    currentPage: 1,
    totalPages: 1,

    setData: (data) =>
        set(() => {
            const sortedData = [...data].sort((a, b) => b.id - a.id);
            const totalCount = sortedData.length;
            const perPage = get().perPage;
            return {
                pageData: sortedData,
                totalCount,
                totalPages: Math.ceil(totalCount / perPage),
                currentPage: 1,
            };
        }),

    setCurrentPage: (num) =>
        set((state) => {
            if (num >= 1 && num <= state.totalPages) {
                return { currentPage: num };
            }
            return {};
        }),

    goToPage: (num) => get().setCurrentPage(num),

    nextPage: () =>
        set((state) => {
            if (state.currentPage < state.totalPages) {
                return { currentPage: state.currentPage + 1 };
            }
            return {};
        }),

    prevPage: () =>
        set((state) => {
            if (state.currentPage > 1) {
                return { currentPage: state.currentPage - 1 };
            }
            return {};
        }),

    goToFirstPage: () => set({ currentPage: 1 }),
    goToLastPage: () => set((state) => ({ currentPage: state.totalPages })),
}));

export default usePaginationStore;
