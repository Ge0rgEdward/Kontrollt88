import { createContext, useState } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
});

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
    };

    const contextValue = {
        items: cartItems,
        addItem: addItemHandler,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;