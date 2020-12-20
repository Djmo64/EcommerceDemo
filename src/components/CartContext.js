import React, { useState } from 'react';



export const CartContext = React.createContext();
export const ProductContext = React.createContext();
export const OpenContext = React.createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState(
        []
    );
   
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
export const ProductProvider = (props) => {
    const [product, setProduct] = useState(
        []
    );
    return(
        <ProductContext.Provider value={ [product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}
export const OpenProvider = (props) => {
    const [open, setOpen] = useState(true);
   
    return(
        <OpenContext.Provider value={[open,setOpen]}>
            {props.children}
        </OpenContext.Provider>
    )
}