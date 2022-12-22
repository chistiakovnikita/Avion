import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import '../../../components'
import { appRoutes } from "../../../constants/appRoutes";

export class ProductDetailsPage extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            products: [],
            product: null,
        }
    }

    static get observedAttributes() {
        return ['id']
    }

    toggleisLoading = () => {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        })
    }


    getProducts() {
        this.toggleisLoading()
        databaseService.read('products')
        .then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    products: data,
                }
            })
        })
        .finally(() => {
            this.toggleisLoading()
        })
    }

    getProduct() {
        this.toggleisLoading()
        databaseService.getDocument('products', this.props.id)
            .then((data) => {
                this.setState((state) => {
                    return{
                        ...state,
                        product: data,
                    }
                })
            })
            .finally(() => [
                this.toggleisLoading()
            ])
    }



    componentDidMount() {
        this.getProducts()
        this.getProduct()
       
    }

    

    render() {
        return `
            ${this.state.product
            ?
            `
            <avion-preloader is-loading="${this.state.isLoading}">
            <avion-product
                poster="${this.state.product.poster}"
                title="${this.state.product.title}"
                price="${this.state.product.price}"
                description="${this.state.product.description}"
            ></avion-product>
            </avion-preloader>
                `
            : ''
            }
            
            <our-brand-description></our-brand-description>
            <avion-preloader is-loading="${this.state.isLoading}">
                <div class="our-brand__products container">
                    ${this.state.products.map(({ title, poster, price, id }) => {
                        return `
                            <product-card
                                title="${title}"
                                poster="${poster}"
                                price="${price}"
                                id="${id}"
                            ></product-card>`
                        }).join(' ')
                    }
                    <div class="our-brand__link">
                        <link-collection></link-collection>
                    </div>
                </div>
                
            </avion-preloader>
           
        `
    }
}

customElements.define('product-page', ProductDetailsPage)




