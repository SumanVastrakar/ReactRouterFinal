import { createContext, useState } from "react";
export const DressnumberContext = createContext();

export const DressnumberContextProvider = ({children})=>{
const [num, setNum] = useState(0);
const [cart, setCart] = useState(0)

const handleChange=(state) =>{
    setNum(state);

}
const carthandle=(inc)=>{
    setCart(cart+inc)
}

return(
    <DressnumberContext.Provider value={{num, handleChange,cart,carthandle}}>{children}</DressnumberContext.Provider>
)
}