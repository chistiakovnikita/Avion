import { Component } from "../../../core";
import './distribution.scss'

export class Distribution extends Component {


    render() {
        return `
            <div class="distribution">

                <h2 class="distribution__title headline-two--white">
                    Join the club and get the benefits
                </h2>
                <h4 class="distribution__subtitle body-large--white">
                    Sign up for our newsletter and receive exclusive offers on <br> new ranges, sales, pop up stores
                    and
                    more
                </h4>
                <div class="distribution-benefits">

                    <div class="distribution-benefits__items">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon distribution-benefits__icon">
                            <use xlink:href="../../assets/images/Distribution/sprite.svg#icons8-done"></use>
                        </svg>
                        <h5 class="distribution-benefits__text body-medium--white">
                            Exclusive offers
                        </h5>
                    </div>

                    <div class="distribution-benefits__items">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon distribution-benefits__icon">
                            <use xlink:href="../../assets/images/Distribution/sprite.svg#icons8-done"></use>
                        </svg>
                        <h5 class="distribution-benefits__text body-medium--white">
                            Free events
                        </h5>
                    </div>

                    <div class="distribution-benefits__items">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon distribution-benefits__icon">
                            <use xlink:href="../../assets/images/Distribution/sprite.svg#icons8-done"></use>
                        </svg>
                        <h5 class="distribution-benefits__text body-medium--white">
                            Large discounts
                        </h5>
                    </div>

                </div>

                <form class="distribution__form">
                    <input class="form__input" type="text" name="email" placeholder="your@email.com">
                    <button class="form__button" type="submit">Sign up</button>
                </form>
            </div>
        `
    }
}

customElements.define('avion-distribution', Distribution)
