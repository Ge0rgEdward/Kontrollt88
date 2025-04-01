import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {
    const cartCtx = useContext(CartContext);
    const cartItemCount = cartCtx.items.length;

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="App Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={() => console.log("Cart clicked")}>
                    Cart ({cartItemCount})
                </Button>
            </nav>
        </header>
    );
};

export default Header;