import { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';

const Header = () => {
    const cartCtx = useContext(CartContext);
    const cartItemCount = cartCtx.items.length;
    const [isCartOpen, setCartOpen] = useState(false);

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <img src={logo} alt="App Logo" />
                    <h1>React Food Order App</h1>
                </div>
                <nav>
                    <Button textOnly={true} onClick={() => setCartOpen(true)}>
                        Cart ({cartItemCount})
                    </Button>
                </nav>
            </header>

            <Modal open={isCartOpen} onClose={() => setCartOpen(false)}>
                <h2>Your Cart</h2>
                {cartCtx.items.length > 0 ? (
                    <ul>
                        {cartCtx.items.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} x {Number(item.price).toFixed(2)} €
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                <Button onClick={() => setCartOpen(false)}>Close</Button>
            </Modal>
        </>
    );
};

export default Header;