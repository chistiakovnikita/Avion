import { Component } from "../../../core";
import './sidebar.scss'

export class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            isVisible: false,
        }
    }

    onClick= (evt) => {
        const target = evt.target
        if(target.closest('.header__hamburger')) {
            this.setState((state) =>{
                return {
                    ...state,
                    isVisible:true,
                }
            })
        }
        if(target.closest('.header__mobile-button')) {
            this.setState((state) =>{
                return {
                    ...state,
                    isVisible:false,
                }
            })
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
                                   <a class="header__mobile-navigation-link" href="./index.html">Home</a>
                               </li>
                               <li class="header__mobile-navigation-item">
                                   <a class="header__mobile-navigation-link" href="./about.html">About Us</a>
                               </li>
                               <li class="header__mobile-navigation-item">
                                   <a class="header__mobile-navigation-link" href="./about.html">Products</a>
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