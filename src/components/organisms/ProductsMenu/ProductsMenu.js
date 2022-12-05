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
                <div class="dropdown">
                    <button class="btn  dropdown-toggle body-medium" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Category
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn dropdown-toggle body-medium" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Product type
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn  dropdown-toggle body-medium" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Price
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn  dropdown-toggle body-medium" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Brand
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
}


customElements.define('products-menu', ProductsMenu)