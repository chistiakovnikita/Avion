import { Component } from "../../../core";
import './headerHamburger.scss'

export class HeaderHamburger extends Component {

    

    render() {
        return`
            <button class="header__hamburger" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                    <use xlink:href="../../assets/images/sprite.svg#Menu"></use>
                </svg>
            </button>
        `
    }
}

customElements.define('header-hamburger', HeaderHamburger)