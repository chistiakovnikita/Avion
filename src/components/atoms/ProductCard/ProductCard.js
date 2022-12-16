import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core"
import './productCard.scss'

export class ProductCard extends core.Component {



    static get observedAttributes() {
        return ['title', 'poster', 'id', 'price']
    }

    render() {
        return `
            <div class="product-card">
                <avion-link to="${appRoutes.productDetails}/${this.props.id}">
                    <img class="product-card__image" src="${this.props.poster}" alt="picture">
                </avion-link>
                <h4 class="product-card__title">
                    ${this.props.title}
                </h4>
                <span class="product-card__price">
                £ ${this.props.price}
                </span>
            </div>
        `
    }
}

customElements.define('product-card', ProductCard)


