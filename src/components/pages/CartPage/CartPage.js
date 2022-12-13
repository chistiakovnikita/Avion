import { Component } from "../../../core";

export class CartPage extends Component {

    render() {
        return `
            <section>
              <avion-cart></avion-cart>
            </section>
        `
    }
}

customElements.define('cart-page', CartPage)