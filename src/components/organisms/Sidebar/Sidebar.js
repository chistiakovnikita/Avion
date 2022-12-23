import * as core from '../../../core'
import './sidebar.scss'
import { appRoutes } from "../../../constants/appRoutes";

export class Sidebar extends core.Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }

    toggleMenu = () => {
        this.setState((state) => {
            return {
                ...state,
                isVisible: !state.isVisible,
            }
        })
    }



    onClick= (evt) => {
        const target = evt.target
        if(target.closest('.header__hamburger')) {
            this.toggleMenu()
        }
        if(target.closest('.header__mobile-button')) {
            this.toggleMenu()
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.onClick)
    }

    render() {
        return `
            ${
               this.state.isVisible
               ? `<div class="header__mobile-menu">
                       <nav class="header__mobile-navigation">
                           <ul>
                               <li class="header__mobile-navigation-item">
                               <avion-link to="${appRoutes.home}">
                                   <span class="header__mobile-navigation-link">Home</span>
                                <avion-link>
                               </li>
                               <li class="header__mobile-navigation-item">
                               <avion-link to="${appRoutes.about}">
                                   <span class="header__mobile-navigation-link">About</span>
                                <avion-link>
                               </li>
                               <li class="header__mobile-navigation-item">
                               <avion-link to="${appRoutes.shop}">
                                   <span class="header__mobile-navigation-link">Shop</span>
                                <avion-link>
                               </li>
                           </ul>
                           <button class="header__mobile-button">
                               <svg xmlns="http://www.w3.org/2000/svg" class="header__mobile-icon">
                                   <use xlink:href="../../assets/images/sprite.svg#Close"></use>
                               </svg>
                           </button>
                       </nav>
                   </div>`
               : ''
            }        
        `
    }

}

customElements.define('avion-sidebar', Sidebar)