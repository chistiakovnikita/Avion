import { Component } from "../../../core";

export class AboutPage extends Component {

    render() {
        return `
        <section>
           <avion-about></avion-about>
        </section>
        <section>
        <div class="our-brand__description-wrapper">
           <our-brand-description></our-brand-description>
        </div>
        </section>
        <section>
           <avion-distribution></avion-distribution>
        </section>
        `
    }
}

customElements.define('about-page', AboutPage)