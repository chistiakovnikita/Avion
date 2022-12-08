import { Component } from "../../../core";
import './productsMenu.scss'

export class ProductsMenu extends Component {
    render() {
        return `
        <div class="products-header">
            <h1 class="products-header__title headline-one--white">
                All products
            </h1>
        </div>
        <div class="products-menu">
            <div class="products-menu__wrapper">
                <avion-dropdown name="Category"></avion-dropdown>
                <avion-dropdown name="Product type"></avion-dropdown>
                <avion-dropdown name="Price"></avion-dropdown>
                <avion-dropdown name="Brand"></avion-dropdown>
            </div>
        </div>
        `
    }
}


customElements.define('products-menu', ProductsMenu)