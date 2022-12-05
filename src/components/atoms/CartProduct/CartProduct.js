import { Component } from "../../../core";
import './cartProduct.scss'

export class CartProduct extends Component {

    render() {
        return `
            <div class="cart__product flex-container">
                <img class="cart__product-image" src="../../assets/images/CartProduct/Product_Image.jpg"
                    alt="picture">
                <div class="cart__product-description">
                    <h4 class="headline-four">
                        Graystone vase
                    </h4>
                    <p class="body-small--blue">
                        A timeless ceramic vase with a tri color grey glaze.
                    </p>
                    <span class="body-medium">
                        £85
                    </span>
                </div>
            </div>
        `


    }
}


customElements.define('cart-product', CartProduct)