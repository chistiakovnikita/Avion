import { Component } from "../../../core";
import './header.scss'
import '../../atoms'

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

                    <div class="header__hamburger">
                        <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                                <use xlink:href="../../assets/images/sprite.svg#Menu"></use>
                            </svg>
                        </button>
                        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
                            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p>Try scrolling the rest of the page to see this option in action.</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        `
    }

}

customElements.define('avion-header', Header)