import './CartItem.css'
import {Link} from "react-router-dom"

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=" alt="product name"/>
            </div>
            <Link to={`/product/${111}`} className="cartitem__name">
            <p>Product 1</p>
            </Link>
            <p className="cartitem__price">$199</p>
            <select className="cartitem__select">
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <button className="cartitem__deleteBtn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    )
}

export default CartItem
