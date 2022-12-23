import { appCategories } from "../../../constants/appCategories";
import { Component, eventBus } from "../../../core";
import './productsTabs.scss'

export class ProductsTabs extends Component {

    constructor() {
        super()
        this.state = {
            activeCategory: appCategories
        }
    }


    onChangeTab = (evt) => {
        if (evt.target.closest('.products-tabs__link')) {
            eventBus.emit('change-tab', { activeTab: evt.target.dataset.categories })
        }

    }

    componentDidMount() {
        this.addEventListener('click', this.onChangeTab)
    }




    render() {
        return `
            <div class="products-tabs-wrapper">
                <div class="products-tabs">
                ${appCategories.map((item) => {
                    return `
                        <a class="products-tabs__link categories" href="#" data-categories="${item.value}">${item.label}</a>
                        `
                    })
                    .join(' ')
                }
                    
                </div>
            </div>
        `
    }
}


customElements.define('products-tabs', ProductsTabs)