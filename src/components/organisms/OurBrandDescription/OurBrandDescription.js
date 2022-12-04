import { Component } from '../../../core'
import './ourBrandDescription.scss'
export class OurBrandDescription extends Component {

    render() {
        return `
        <div class="our-brand__description container">
            <h3 class="headline-three our-brand__description-title">
                What makes our brand different
            </h3>
            <div class="our-brand__description-inner">


                <div class="our-brand__description-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon">
                        <use xlink:href="../../assets/images/sprite.svg#Delivery"></use>
                    </svg>
                    <h4 class="headline-four">
                        Next day as standard
                    </h4>
                    <p class="body-medium">
                        Order before 3pm and get your order the next day as standard
                    </p>
                </div>

                <div class="our-brand__description-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon">
                        <use xlink:href="../../assets/images/sprite.svg#Checkmark--outline"></use>
                    </svg>
                    <h4 class="headline-four">
                        Made by true artisans
                    </h4>
                    <p class="body-medium">
                        Handmade crafted goods made with real passion and craftmanship
                    </p>
                </div>

                <div class="our-brand__description-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon">
                        <use xlink:href="../../assets/images/sprite.svg#Purchase"></use>
                    </svg>
                    <h4 class="headline-four">
                        Unbeatable prices
                    </h4>
                    <p class="body-medium">
                        For our materials and quality you won’t find better prices anywhere
                    </p>
                </div>

                <div class="our-brand__description-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon">
                        <use xlink:href="../../assets/images/sprite.svg#Sprout"></use>
                    </svg>
                    <h4 class="headline-four">
                        Recycled packaging
                    </h4>
                    <p class="body-medium">
                        We use 100% recycled to ensure our footprint is more manageable
                    </p>
                </div>
            </div>
       </div>
        `
    }

}

customElements.define('our-brand-description', OurBrandDescription)