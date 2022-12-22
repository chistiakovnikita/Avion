import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";

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