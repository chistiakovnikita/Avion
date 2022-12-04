import { Component } from "../../../core";
import './newCollection.scss'

export class NewCollection extends Component {

    render() {
        return `
            <section>
                <div class="new-collection">
                    <div class="new-collection__block">
                        <h2 class="new-collection__title">
                            Luxury homeware for people who love timeless design quality
                        </h2>
                        <h4 class="new-collection__subtitle body-large">
                            Shop the new Spring 2022 collection today
                        </h4>
                        <link-collection></link-collection>
                    </div>
                </div>
            </section>
        `
    }

}

customElements.define('new-collection', NewCollection)