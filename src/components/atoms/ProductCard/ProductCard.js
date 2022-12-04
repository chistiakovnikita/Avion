import { Component } from "../../../core";
import './productCard.scss'

export class ProductCard extends Component {



    static get observedAttributes() {
        return ['content']
    }

    render() {
        return `
            <div class="product-card">
                <img class="product-card__image" src="../../assets/images/ProductCard/Rustic_Vase_Set.jpg" alt="picture">
                <h4 class="product-card__title">
                    Rustic Vase Set
                </h4>
                <span class="product-card__price">
                    £155
                </span>
            </div>
        `
    }
}

customElements.define('product-card', ProductCard)


