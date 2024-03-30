import { defineStore } from "pinia";

type ThemeState = {
    id: number;
    theme: string;
}

type ThemeActions = {
    changeTheme: (themeNumber: number) => void;
}

export const useTheme = defineStore({
    id: "theme",
    state: (): ThemeState => ({
        id: 2,
        theme: "dark",
    }),
    actions: {
        changeTheme(this: ThemeState, themeNumber: number) {
            switch (themeNumber) {
                case 1:
                    this.id = themeNumber;
                    this.theme = "light";
                    break;
                case 2:
                    this.id = themeNumber;
                    this.theme = "dark";
                    break;
                default:
                    this.id = 1;
                    this.theme = "light";
                    break;
            }
        }
    } as ThemeActions
});