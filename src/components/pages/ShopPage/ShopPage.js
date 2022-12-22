
import { Component, eventBus, EventBus } from "../../../core";
import '../../../components'
import './shopPage.scss'
import { databaseService } from "../../../services/Database";

export class ShopPage extends Component {

    constructor() {
        super()
        this.state = {

            products: [],
            activeFilter: '',

        }
    }



    getProducts = () => {
        databaseService.read('products')
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        products: data,

                    }
                })
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
                 <div class="products">
                    <products-menu></products-menu>
                  
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
                   
                    <div class="products__link container center">
                        <link-collection></link-collection>
                    </div>
                  </div>
            </section>
        `
    }
}

customElements.define('shop-page', ShopPage)




















