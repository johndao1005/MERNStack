import './Product.css'
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <div className="product">
            <img src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=" alt="product name"/>
            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                <p className="info__price">$499</p>
                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product
