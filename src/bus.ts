import { defineStore } from 'pinia';

export default defineStore({
    id: 'app',

    state() {
        return {
            hover: false,
            caret: false,
        };
    },
    actions: {},
    getters: {},
});
