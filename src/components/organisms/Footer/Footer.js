import { Component } from "../../../core";
import './footer.scss'

export class Footer extends Component {
    render() {
        return `
            <div class="footer">
                <div class="footer__inner">
                    <nav class="footer-navigation">
                        <div class="footer-navigation__inner">

                            <ul class="footer-navigation__menu">
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__title" href="#">Menu</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">New arrivals</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Best sellers</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Recently viewed</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Popular this week</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">All products</a>
                                </li>
                            </ul>

                            <ul class="footer-navigation__menu">
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__title" href="#">Categories</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Crockery</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Furniture</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Homeware</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Plant pots</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Chairs</a>
                                </li>
                            </ul>

                            <ul class="footer-navigation__menu">
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__title" href="#">Our company</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">About us</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Vacancies</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Contact us</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Privacy</a>
                                </li>
                                <li class="footer-navigation__item">
                                    <a class="footer-navigation__link" href="#">Returns policy</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="footer-distribution">
                        <h5 class="footer-distribution__title headline-five--white">
                            Join our mailing list
                        </h5>
                        <form class=" flex-container">
                            <input class="form__input--footer" type="text" name="email" placeholder="your@email.com">
                            <button class="form__button--footer" type="submit">Sign up</button>
                        </form>
                    </div>

                </div>
                <div class="footer-bottom">
                    <span class="body-small">
                        Copyright 2022 Avion LTD
                    </span>
                    <div class="footer-social-networks">
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector"></use>
                            </svg>
                        </a>
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector-1"></use>
                            </svg>
                        </a>
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector-2"></use>
                            </svg>
                        </a>
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector-3"></use>
                            </svg>
                        </a>
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector-4"></use>
                            </svg>
                        </a>
                        <a class="footer-social-networks__link" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon footer-social-networks__icon">
                                <use xlink:href="../../assets/images/Footer/sprite.svg#Vector-5"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('avion-footer', Footer)