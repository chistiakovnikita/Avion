import { Component } from "../../../core";
import './searchForm.scss'

export class SearchForm extends Component {

    constructor() {
        super();
        this.state = {
            isVisible: false,
        }
    }


    toggleSearch = () => {
        this.setState((state) => {
            return {
                ...state,
                isVisible: !state.isVisible
            }
        })
    }

    onClick = (evt) => {
        this.setState((state) => {
            const target = evt.target
            if (target.closest('.search-form__btn')) {
                return {
                    ...state,
                    isVisible: true,
                }
            }
        })
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
            ${this.state.isVisible
                ? `<form class="search-form">
                        <input class="search-form__input" type="text" placeholder="search">
                        <button type="submit" class="search-form__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon search-form-icon">
                                <use xlink:href="../../assets/images/sprite.svg#Search"></use>
                            </svg>
                        </button>
                    </form>`
                : `<div class="search-form">
                        <button type="button" class="search-form__btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon search-form-icon">
                                <use xlink:href="../../assets/images/sprite.svg#Search"></use>
                            </svg>
                        </button>
                    </div>`
            }
            `
    }
}


customElements.define('search-form', SearchForm)





