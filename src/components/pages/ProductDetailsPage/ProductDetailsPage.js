import { Component } from "../../../core";

export class ProductDetailsPage extends Component {

    render() {
        return `
        <h1>Product Details Page</h1>
        `
    }
}

customElements.define('product-details-page', ProductDetailsPage)