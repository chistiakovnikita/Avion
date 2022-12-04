import { Component } from "../../../core";
import './linkCollection.scss'

export class LinkCollection extends Component {



    render() {
        return `
            <a class="link-collection" href="#">View collection</a>
        `
    }
}

customElements.define('link-collection', LinkCollection)