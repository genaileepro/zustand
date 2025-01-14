import { create } from 'zustand';

const useBearsStore = create(function (set) {
    return {
        bears: 0,
        increase: function () {
            set(function (state) {
                return { bears: state.bears + 1 };
            });
        },
        init: function () {
            set({
                bears: 0,
            });
        },
    };
});

export default useBearsStore;
