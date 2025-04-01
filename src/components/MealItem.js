const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div className = "meal-item-description">
                    <h3>{props.meal.name}</h3>
                    <p classname="meal-item-price">{props.meal.price}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button" >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem