import { Component, Validator } from "../../../core";
import { FormManager } from "../../../core/FormManager/FormManager";
import { initialFieldsState } from "./InitialState";
import { authService } from '../../../services'

export class SignUpPage extends Component {

    constructor() {
        super()
        this.state = {
            error: '',
            isLoading: false,
            fields: {
                ...initialFieldsState
            }
        }
        this.form = new FormManager()
    }

    toggleisLoading = () => {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading
            }
        })
    }

    registerUser = (data) => {
        this.toggleisLoading()
        authService.signUp(data.email, data.password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error.message
                    }
                })
            })
            .finally(() => {
                this.toggleisLoading()
            })

    }

    validateForm = (evt) => {
        if (evt.target.closest('registration-form')) {
            this.form.init(this.querySelector('.registration'), {
                email: [
                    Validator.email('Email is not valid'),
                    Validator.required('The field should not be empty')
                ],
                password: [
                    Validator.required('The field should not be empty')
                ],
            })
        }
    }

    validate = (evt) => {
        console.log(evt.detail)
        this.setState((state) => {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...evt.detail,
                },
            };
        });
    };

    componentDidMount() {
        this.addEventListener('submit', this.form.handleSubmit(this.registerUser));
        this.addEventListener('click', this.validateForm);
        this.addEventListener('validate-controls', this.validate);
    }


    render() {

        const { fields: { email, password } } = this.state;
        return `
            <section>
                <div class="registration-form">
                    <avion-preloader is-loading="${this.state.isLoading}">
                        <form class="registration">
                            <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
                            <registration-form
                                type="email"
                                label="Email"
                                control-name="email"
                                value="${email.value}"
                                is-valid="${email.isValid}"
                                is-touched="${email.isTouched}"
                                error-message="${email.errors?.message}"
                            ></registration-form>

                            <registration-form
                                type="password" 
                                label="Password"
                                control-name="password"
                                class-name="first-pass"
                                value="${password.value}"
                                is-valid="${password.isValid}"
                                is-touched="${password.isTouched}"
                                error-message="${password.errors?.message}"
                            ></registration-form>

                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>
                    </avion-preloader>
                </div>
            </section>
        `
    }
}

customElements.define('sign-up-page', SignUpPage)