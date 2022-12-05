import { Component } from "../../../core";
import './productsGallery.scss'

export class ProductsGallery extends Component {
    render() {
        return `
        <div class="products-gallery">
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
            <product-card></product-card>
        </div>
        `
    }
}

customElements.define('products-gallery', ProductsGallery)