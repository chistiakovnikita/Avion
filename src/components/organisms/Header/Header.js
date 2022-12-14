import { appRoutes } from '../../../constants/appRoutes'
import * as core from '../../../core'
import './header.scss'
import { authService } from '../../../services'




export class Header extends core.Component {


    componentDidMount() {
        if (authService.user) {
            this.querySelector('.avatar').style.fill = 'green'
            
        }
    }

    render() {
        return `
        <div class="header__wrapper">
            <div class="header__inner">
                <search-form></search-form>
                <div class="logo-wrapper">
                    <span class="logo"> Avion</span>
                </div>
                <nav class="header-navigation">
                    <ul class="header-navigation__menu">
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.home}">Home</avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.about}">About</avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.shop}">Shop</avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.admin}">Admin</avion-link>
                        </li>
                        
                    </ul>
                    <ul class="header-navigation__menu-user">
                        <li class="header-navigation__item-user">
                            <avion-link to="${appRoutes.cart}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon">
                                    <use xlink:href="../../assets/images/sprite.svg#Shopping--cart"></use>
                                </svg>
                            </avion-link>
                        </li>
                        <li class="header-navigation__item-user">
                            <avion-link to="${appRoutes.signUp}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon avatar">
                                    <use xlink:href="../../assets/images/sprite.svg#User--avatar"></use>
                                </svg>
                            </avion-link>
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