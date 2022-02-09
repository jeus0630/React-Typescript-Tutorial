import {createContext} from "react";
import {theme} from "./theme";
import React from "react";
type ThemeContextProviderProps = {
    children: React.ReactNode;
}

const ThemeContext = createContext(theme);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

export default ThemeContextProvider;