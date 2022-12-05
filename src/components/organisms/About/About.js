import { Component } from "../../../core";
import './about.scss'

export class About extends Component {
    render() {
        return`
            <div class="about-us">
                <h1 class="about-us__title headline-one center">
                    A brand built on the love of craftmanship, <br>
                    quality and outstanding customer service
                </h1>
                <div class="about-us-story">
                    <div class="about-us-story__inner">
                        <div class="about-us-story__text-content">
                            <h3 class="about-us-story__title headline-three">
                                From a studio in London to a global brand with over 400 outlets
                            </h3>
                            <p class="about-us-story__text">
                                When we started Avion, the idea was simple. Make high quality furniture affordable and
                                available for the mass market.
                            </p>
                            <p class="about-us-story__text">
                                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and
                                design so our Chelsea boutique become the hotbed for the London interior design
                                community.
                            </p>
                            <button type="button" class="btn--get-in-touch">Get in touch</button>
                        </div>
                        <div>
                            <img class="about-us-story__img" src="../../assets/images/About/Image.jpg" alt="picture">
                        </div>
                    </div>
                    <div class="about-us-story__inner--next">
                        <div class="about-us-story__text-content">
                            <h3 class="about-us-story__title headline-three">
                                Our service isn’t just personal, it’s actually
                                hyper personally exquisite
                            </h3>
                            <p class="about-us-story__text">
                                When we started Avion, the idea was simple. Make high quality furniture affordable and
                                available for the mass market.
                            </p>
                            <p class="about-us-story__text">
                                Handmade, and lovingly crafted furniture and homeware is what we live, breathe and
                                design so our Chelsea boutique become the hotbed for the London interior design
                                community.
                            </p>
                            <button type="button" class="btn--get-in-touch">Get in touch</button>
                        </div>
                        <div>
                            <img class="about-us-story__img" src="../../assets/images/About/Image-1.jpg" alt="picture">
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('avion-about', About)