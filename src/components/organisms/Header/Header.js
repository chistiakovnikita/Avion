import { appRoutes } from '../../../constants/appRoutes'
import * as core from '../../../core'
import './header.scss'
import { authService } from '../../../services'



export class Header extends core.Component {

    constructor() {
        super()
        this.state = {
            activePath: window.location.pathname,
            isUser: false,
        }
    }

    static get observedAttributes() {
        return ['is-logged']
    }

    onSignOut = (evt) => {
        evt.preventDefault()
        if (evt.target.closest('.sign-out-link')) {
            this.dispatch('sign-out')
        }

    }

    onChangeRoute = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                activePath: evt.detail.target,
            }
        })
    }

    isActiveLink(path) {
        return this.state.activePath === path ? "active-link" : "" ;
    }

   
    componentDidMount() {
        this.addEventListener('click', this.onSignOut);
        this.addEventListener('change-route', this.onChangeRoute);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onSignOut);
        this.removeEventListener('change-route', this.onChangeRoute);
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
                            <avion-link to="${appRoutes.home}">
                                <span class="${this.isActiveLink(appRoutes.home)}">Home</span>
                            </avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.about}">
                                <span class="${this.isActiveLink(appRoutes.about)}">About</span>
                            </avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.shop}">
                                <span class="${this.isActiveLink(appRoutes.shop)}">Shop</span>
                            </avion-link>
                        </li>
                       
                       
                        ${JSON.parse(this.props['is-logged'])
                ? `         
                            <li class="header-navigation__item">
                                <avion-link to="${appRoutes.admin}">
                                    <span class="${this.isActiveLink(appRoutes.admin)}">Admin</span>
                                </avion-link>
                            </li>
                            <li class="header-navigation__item">
                                <a class="sign-out-link" href="#">Sign Out</a>
                            </li>`
                : `
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.signIn}">
                                <span class="${this.isActiveLink(appRoutes.signIn)}">Sign In</span>
                            </avion-link>
                        </li>
                        <li class="header-navigation__item">
                            <avion-link to="${appRoutes.signUp}">
                                <span class="${this.isActiveLink(appRoutes.signUp)}">Sign Up</span>
                            </avion-link>
                        </li>
                        `
            }
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
                               <svg xmlns="http://www.w3.org/2000/svg" class="icon header__icon avatar">
                                    <use xlink:href="../../assets/images/sprite.svg#User--avatar"></use>
                                </svg>
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