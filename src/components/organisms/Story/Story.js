import { Component } from "../../../core";
import './Story.scss'

export class Story extends Component {


    render() {
        return `
            <div class="story">
                <div class="story-wrapper">
                    <div class="story__collection-block">
                        <h2 class="story__title headline-two--white">
                            Luxury homeware for people who love timeless design quality
                        </h2>
                        <h4 class="story__subtitle body-large--white">
                            Shop the new Spring 2022 collection today
                        </h4>
                        <link-collection></link-collection>
                    </div>
                    <div>
                        <img class="story__image" src="../../assets/images/Story/Image_Block.jpg" alt="picture">
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('avion-story', Story)