import { Component } from "../../../core";
import './dropdown.scss'

export class Dropdown extends Component {

    static get observedAttributes() {
        return ['name']
    }

    render() {
        return`
            <div class="dropdown">
                <button class="dropdown__button" type="button">
                    ${this.props.name}
                </button>
                <ul class="dropdown__menu">
                    <li class="dropdown__item">
                        <a class="dropdown__link" href="">cbbxbxbxcxbbcx</a>
                    </li>
                    <li class="dropdown__item">
                        <a class="dropdown__link" href="">cbbxbxbxcxbbcx</a>
                    </li>
                    <li class="dropdown__item">
                        <a class="dropdown__link" href="">cbbxbxbxcxbbcx</a>
                    </li>
                    <li class="dropdown__item">
                        <a class="dropdown__link" href="">cbbxbxbxcxbbcx</a>
                    </li>
                    <li class="dropdown__item">
                        <a class="dropdown__link" href="">cbbxbxbxcxbbcx</a>
                    </li>
                </ul>
            </div>
        `
    }
}

customElements.define('avion-dropdown', Dropdown)