import { Component } from "../../../core";
import './productsTabs.scss'

export class ProductsTabs extends Component {

    render() {
        return `
            <div class="products-tabs-wrapper">
                <div class="products-tabs">
                    <a class="products-tabs__link" href="#">Plant pots</a>
                    <a class="products-tabs__link" href="#">Ceramics</a>
                    <a class="products-tabs__link" href="#">Tables</a>
                    <a class="products-tabs__link" href="#">Chairs</a>
                    <a class="products-tabs__link" href="#">Crockery</a>
                    <a class="products-tabs__link" href="#">Tableware</a>
                    <a class="products-tabs__link" href="#">Cutlery</a>
                </div>
            </div>
        `
    }
}


customElements.define('products-tabs', ProductsTabs)