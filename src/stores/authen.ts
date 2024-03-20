import { defineStore } from "pinia";

type AuthenState = {
    isAuthen: boolean;
}

type AuthenActions = {
    changeAuthen: (status: boolean) => void;
}

export const useAuthen = defineStore({
    id: "authen",
    state: (): AuthenState => ({
        isAuthen: false,
    }),
    actions: {
        changeAuthen(this: AuthenState, status: boolean) {
            this.isAuthen = status;
        }
    } as AuthenActions
});