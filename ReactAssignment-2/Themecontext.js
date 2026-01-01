import { Children, createContext, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

export const Themecontext=createContext();

export const ThemeProvider=({Children})=>{
    const[theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        setTheme((Prev)=>(Prev==="light"?"dark" :"light"));

    }
    return(
        <Themecontext.Provider value={{theme,toggleTheme}}>
            {Children}
        </Themecontext.Provider>
    )
}