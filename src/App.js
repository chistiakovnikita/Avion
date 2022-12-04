import { Component } from "./core";
import './components'


export class App extends Component {

  render() {
    return `
      <avion-header></avion-header>
      <main>
        <products-tabs></products-tabs>
        <new-collection></new-collection>
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
      </main>
      <footer>
        <avion-footer></avion-footer>
      </footer>
    `
  }
}

customElements.define('avion-app', App);
