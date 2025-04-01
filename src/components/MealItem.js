import Button from './UI/Button'

const MealItem = (props) => {

        const formattedPirce = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR'
        }).format(props.meal.price);

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div className = "meal-item-description">
                    <h3>{props.meal.name}</h3>
                    <p classname="meal-item-price">{formattedPirce}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button className="button" textOnly={true} onClick={() => console.log("Cart clicked")} >Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem