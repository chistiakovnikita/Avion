import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import '../../../components'

export class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            products: [],
        }
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

    componentDidMount() {
        this.getProducts()
    }

    render() {
        return `
            <section>
                <new-collection></new-collection>
            </section>
            <section>
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
            </section>
            <section>
                <avion-story></avion-story>
            </section>
            <section>
                <avion-distribution></avion-distribution>
            </section>
        
        `
    }
}

customElements.define('home-page', HomePage)