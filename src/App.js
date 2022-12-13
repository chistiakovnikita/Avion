import * as core from './core'
import './components'
import { appRoutes } from "./constants/appRoutes";




export class App extends core.Component {

      render() {
            return `
               <avion-router>
                  <header class="header">
                     <avion-header></avion-header>
                  </header
                  <main>
                     <section>
                        <products-tabs></products-tabs>
                     </section>

                     <avion-route path="${appRoutes.home}" component="home-page" title="Home"></avion-route>
                     <avion-route path="${appRoutes.about}" component="about-page" title="About"></avion-route>
                     <avion-route path="${appRoutes.shop}" component="shop-page" title="Shop"></avion-route>
                     <avion-route path="${appRoutes.productDetails}/:id" component="product-page" title="Product"></avion-route>
                     <avion-route path="${appRoutes.cart}" component="cart-page" title="Cart"></avion-route>
                     <avion-route path="${appRoutes.admin}" component="admin-page" title="Admin"></avion-route>
                     <avion-route path="${appRoutes.signIn}" component="sign-in-page" title="Sign In"></avion-route>
                     <avion-route path="${appRoutes.signUp}" component="sign-up-page" title="Sign Up"></avion-route>
                     <avion-route path="${appRoutes.errorPage}" component="error-page" title="Not Found"></avion-route>

                     <avion-outlet></avion-outlet>
                  </main>
                  <footer>
                     <avion-footer></avion-footer>
                  </footer>
               </avion-router>
    
            `
      }



}

customElements.define('avion-app', App);


{/* <nav>
                     <ul>
                        <li>
                           <avion-link to="/">Home<avion-link>
                        </li>
                        <li>
                           <avion-link to="/about">About<avion-link>
                        </li>
                     </ul>
                  </nav> */}




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







// ABOUT
/* <header class="header">
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
</footer> */