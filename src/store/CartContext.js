import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
});

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const updatedItems = [...state.items];
        if (existingCartItemIndex !== -1) {
            updatedItems[existingCartItemIndex] = {
                ...updatedItems[existingCartItemIndex],
                quantity: updatedItems[existingCartItemIndex].quantity + 1,
            };
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return {
            ...state,
            items: updatedItems,
        };
    }
    return state;
};




export const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item });
    };

    const contextValue = {
        items: cartState.items,
        addItem: addItemHandler,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContext;