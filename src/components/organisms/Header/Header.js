import { Component } from "../../../core";
import './header.scss'




export class Header extends Component {

    render() {
        return `
        <div class="header__wrapper">
            <div class="header__inner">
                <search-form></search-form>
                <div class="logo-wrapper">
                    <a class="logo" href="#"> Avion</a>
                </div>
                <nav class="header-navigation">
                    <ul class="header-navigation__menu">
                        <li class="header-navigation__item">
                            <a class="header-navigation__link" href="#">Home</a>
                        </li>
                        <li class="header-navigation__item">
                            <a class="header-navigation__link" href="#">About us</a>
                        </li>
                        <li class="header-navigation__item">
                            <a class="header-navigation__link" href="#">Contact</a>
                        </li>
                        <li class="header-navigation__item">
                            <a class="header-navigation__link" href="#">Blog</a>
                        </li>
                    </ul>
                    <ul class="header-navigation__menu-user">
                        <li class="header-navigation__item-user">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                                    <use xlink:href="../../assets/images/sprite.svg#Shopping--cart"></use>
                                </svg>
                            </a>
                        </li>
                        <li class="header-navigation__item-user">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                                    <use xlink:href="../../assets/images/sprite.svg#User--avatar"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <button class="header__hamburger" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                        <use xlink:href="../../assets/images/sprite.svg#Menu"></use>
                    </svg>
                </button>
                    <avion-sidebar></avion-sidebar>
                </nav>
            </div>
        </div>
        `
    }

}

customElements.define('avion-header', Header)