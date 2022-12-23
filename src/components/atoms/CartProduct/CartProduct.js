import { Component } from "../../../core";
import './cartProduct.scss'

export class CartProduct extends Component {

    static get observedAttributes() {
        return ['id', 'poster', 'title', 'price', 'description']
    }

    render() {
        return `
            <div class="cart__product flex-container">
                <img class="cart__product-image" src="../../../assets/images/CartProduct/Product_Image.jpg"
                    alt="picture">
                <div class="cart__product-description">
                    <h4 class="headline-four">
                        Sono Vase
                    </h4>
                    <p class="body-small--blue">
                        A timeless ceramic vase with a tri color grey glaze.
                    </p>
                    <span class="body-medium">
                        £270
                    </span>
                </div>
            </div>
        `


    }
}


customElements.define('cart-product', CartProduct)