import { Component } from "../../../core";

export class HomePage extends Component {

    render() {
        return `
            <section>
                <new-collection></new-collection>
            </section>
            <section>
                <our-brand-description></our-brand-description>
                <div class="our-brand__products container">
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <product-card></product-card>
                    <div class="our-brand__link">
                        <link-collection></link-collection>
                    </div>
                </div>
            </section>
            <section>
                <avion-story></avion-story>
            </section>
            <section>
                <avion-distribution></avion-distribution>
            </section>
        
        `
    }
}

customElements.define('home-page', HomePage)