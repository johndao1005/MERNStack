
import "./ProductScreen.css"

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=" alt="product name"/>
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p className="left__price">$199</p>
                    <p className="left__description">lorem ipsum dolor</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div class="right__info">
                    <p>
                        Price: <span>$499</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Quantity:
                        <select>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductScreen
