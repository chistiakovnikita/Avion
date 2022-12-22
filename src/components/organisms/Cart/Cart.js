import { Component } from "../../../core";
import './cart.scss'

export class Cart extends Component {

  


    render() {
        return `
        <div class="cart">
            <div class="cart__wrapper">
                <h1 class="cart__title headline-one">
                    Your shopping cart
                </h1>
                <div class="">
                    <div class="cart__header">
                        <div class="cart__header-item1">
                            <h6 class="headline-six">
                                Product
                            </h6>
                        </div>
                        <div class="cart__header-item2">
                            <h6 class="headline-six">
                                Quantity
                            </h6>
                        </div>
                        <div class="cart__header-item3">
                            <h6 class="headline-six">
                                Total
                            </h6>
                        </div>
                    </div>

                    <div class="cart__main">
                        <cart-product></cart-product>
                        <div>
                            <button class="cart__product-btn" type="button">-</button>
                            <span class="cart__product-quantity">
                                1
                            </span>
                            <button class="cart__product-btn" type="button">+</button>
                        </div>
                        <div class="cart__product-price-wrapper">
                            <span class="cart__product-price">
                                £85
                            </span>
                        </div>
                    </div>

                    <div class="cart__footer">
                        <div>
                            <h4 class="cart__footer-title headline-four--blue">
                                Subtotal
                            </h4>
                            <span class="headline-three">
                                £85
                            </span>
                        </div>
                        <p class="headline-six--blue">
                            Taxes and shipping are calculated at checkout
                        </p>
                        <button class="cart__footer-btn">Go to checkout</button>
                    </div>

                </div>
            </div>
        </div>
        `
    }
}

customElements.define('avion-cart', Cart)