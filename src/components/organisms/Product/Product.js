import { Component } from "../../../core";
import './product.scss'

export class Product extends Component {


    static get observedAttributes() {
        return ['id', 'poster', 'title', 'price', 'description']
    }

    

    render() {
        return `
            <div class="product">
                <div class="product__item">
                    <img class="product__image" src="${this.props.poster}" alt="picture">
                </div>
                <div class="product__item">
                    <div class=" product__description">
                        <h1 class="product__title headline-one">
                        ${this.props.title}
                        </h1>
                        <span class="product__price">
                            £${this.props.price}
                        </span>
                        <h5 class="product__subtitle headline-five">
                            Product description
                        </h5>
                        <p class="product__text body-medium">
                            ${this.props.description}
                        </p>

                        <div class="product-dimensions">
                            <h5 class="product-dimensions__title headline-five">
                                Dimensions
                            </h5>
                            <div class="product-dimensions__wrapper">
                                <div class="product-dimensions__item">
                                    <h6 class="product-dimensions__subtitle headline-six">
                                        Height
                                    </h6>
                                    <span class="body-medium">
                                        110cm
                                    </span>
                                </div>
                                <div class="product-dimensions__item">
                                    <h6 class="product-dimensions__subtitle headline-six">
                                        Width
                                    </h6>
                                    <span class="body-medium">
                                        110cm
                                    </span>
                                </div>
                                <div class="product-dimensions__item">
                                    <h6 class="product-dimensions__subtitle headline-six">
                                        Depth
                                    </h6>
                                    <span class="body-medium">
                                        110cm
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div class="product__counter">
                            <h5 class="product__subtitle headline-five">
                                Quantity
                            </h5>
                            <button class="product__btn-quantity" type="button">-</button>
                            <span class="product__quantity">
                                1
                            </span>
                            <button class="product__btn-quantity" type="button">+</button>
                        </div>
                        <button class="product__btn-cart" type="button">Add to cart</button>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('avion-product', Product)