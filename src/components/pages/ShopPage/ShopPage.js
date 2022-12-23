
import { Component, eventBus, EventBus } from "../../../core";
import '../../../components'
import './shopPage.scss'
import { databaseService } from "../../../services/Database";

export class ShopPage extends Component {

    constructor() {
        super()
        this.state = {
            isLoading: false,
            products: [],
            activeFilter: '',

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



    getProducts = () => {
        this.toggleisLoading()
        databaseService.read('products')
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        products: data.sort(() => Math.random() - 0.5)

                    }
                })
            })
            .finally(() => {
                this.toggleisLoading()
            })
    }

    onChangeFilter = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                activeFilter: evt.detail.activeTab
            }
        })
    }



    componentDidMount() {
        this.getProducts()
        eventBus.on('change-tab', this.onChangeFilter)
    }

    componentWillUnmount() {
        eventBus.off('change-tab', this.onChangeFilter)
    }

    render() {
        console.log(this.state.activeFilter)
        return `
            <section>
                <products-tabs></products-tabs>
            </section>
            <section>
                 <div class="products">
                    
                    <avion-preloader is-loading="${this.state.isLoading}">
                  
                        <div class="products-gallery">

                            ${this.state.products.filter((item) => {
                                if (this.state.activeFilter) {
                                    return item.category === this.state.activeFilter
                                }
                                return true

                                }).map(({ title, poster, price, id }) => {
                                    return `
                                    <product-card
                                        title="${title}"
                                        poster="${poster}"
                                        price="${price}"
                                        id="${id}"

                                    ></product-card>`

                                }).join(' ')
                            }
                        </div>
                    </avion-preloader>
                    <div class="products__link container center">
                        <link-collection></link-collection>
                    </div>
                  </div>
            </section>
        `
    }
}

customElements.define('shop-page', ShopPage)




















