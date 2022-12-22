import { Component } from "../../../core";
import './cartProduct.scss'

export class CartProduct extends Component {

    static get observedAttributes() {
        return ['id', 'poster', 'title', 'price', 'description']
    }

    render() {
        return `
            <div class="cart__product flex-container">
                <img class="cart__product-image" src="${this.props.poster}"
                    alt="picture">
                <div class="cart__product-description">
                    <h4 class="headline-four">
                        ${this.props.poster}
                    </h4>
                    <p class="body-small--blue">
                        ${this.props.description}
                    </p>
                    <span class="body-medium">
                        £${this.props.price}
                    </span>
                </div>
            </div>
        `


    }
}


customElements.define('cart-product', CartProduct)