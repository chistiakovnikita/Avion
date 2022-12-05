import { Component } from "./core";
import './components'


export class App extends Component {

      render() {
            return `
                <header class="header">
                     <avion-header></avion-header>
                </header
                <main>
                    <section>
                        <products-tabs></products-tabs>
                    </section>
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
                <main>
                <footer>
                    <avion-footer></avion-footer>
                </footer>
            `
      }



}

customElements.define('avion-app', App);

//  HOME
// render() {
//   return `
//     <header class="header">
//       <avion-header></avion-header>
//     </header
//     <main>
//       <section>
//         <products-tabs></products-tabs>
//       </section>
//       <section>
//         <new-collection></new-collection>
//       </section>
//       <section>
//         <our-brand-description></our-brand-description>
//         <div class="our-brand__products container">
//           <product-card></product-card>
//           <product-card></product-card>
//           <product-card></product-card>
//           <product-card></product-card>
//           <div class="our-brand__link">
//             <link-collection></link-collection>
//           </div>
//         </div>
//       </section>
//       <section>
//         <avion-story></avion-story>
//       </section>
//       <section>
//         <avion-distribution></avion-distribution>
//       </section>
//     </main>
//     <footer>
//       <avion-footer></avion-footer>
//     </footer>
//   `
// }







// CART
// render() {
//   return `
//     <header class="header">
//       <avion-header></avion-header>
//     </header
//     <main>
//       <section>
//         <products-tabs></products-tabs>
//       </section>
//       <section>
//         <avion-cart></avion-cart>
//       </section>
//     <main>
//     <footer>
//       <avion-footer></avion-footer>
//     </footer>
//   `
// }





// Product
// render() {
//   return `
//     <header class="header">
//       <avion-header></avion-header>
//     </header
//     <main>
//       <section>
//         <products-tabs></products-tabs>
//       </section>
//       <section class="section-product">
//         <avion-product></avion-product>
//       </section >
//       <section>
//         <our-brand-description></our-brand-description>
//         <div class="our-brand__products container">
//           <product-card></product-card>
//           <product-card></product-card>
//           <product-card></product-card>
//           <product-card></product-card>
//           <div class="our-brand__link">
//             <link-collection></link-collection>
//           </div>
//         </div>
//       </section>
//       <section>
//         <avion-distribution></avion-distribution>
//       </section>
//     <main>
//     <footer>
//       <avion-footer></avion-footer>
//     </footer>
//   `
// }




// PRODUCTS
// render() {
//       return `
//             <header class="header">
//                <avion-header></avion-header>
//             </header
//             <main>
//               <section>
//                 <products-tabs></products-tabs>
//               </section>
//               <section>
//                  <div class="products">
//                      <products-menu></products-menu>
//                      <products-gallery></products-gallery>
//                      <div class="products__link container center">
//                         <link-collection></link-collection>
//                      </div>
//                   </div>
//               </section>
//             </main>
//             <footer>
//                <avion-footer></avion-footer>
//             </footer>
//       `
// }
