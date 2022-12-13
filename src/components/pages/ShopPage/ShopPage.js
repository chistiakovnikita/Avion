import { Component } from "../../../core";

export class ShopPage extends Component {

    render() {
        return `
            <section>
                 <div class="products">
                    <products-menu></products-menu>
                    <products-gallery></products-gallery>
                    <div class="products__link container center">
                        <link-collection></link-collection>
                    </div>
                  </div>
            </section>
        `
    }
}

customElements.define('shop-page', ShopPage)