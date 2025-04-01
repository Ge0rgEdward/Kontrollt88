import { useContext } from 'react';
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    }).format(props.meal.price);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            price: props.meal.price,
            image: props.meal.image,
        });
    };

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} />
                <div className="meal-item-description">
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button className="button" textOnly={true} onClick={addToCartHandler}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    );
};

export default MealItem;