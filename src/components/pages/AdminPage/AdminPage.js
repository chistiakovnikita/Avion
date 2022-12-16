import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core";
import { authService } from "../../../services";
import { FormManager } from "../../../core";
import { storageService } from "../../../services/Storage";
import { databaseService } from "../../../services/Database";

export class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
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

    createProduct = (data) => {
        this.toggleisLoading()
        storageService.uploadPoster(data.poster)
            .then((snapshot) => {
                storageService.getDownloadURL(snapshot.ref)
                    .then((url) => {
                        databaseService
                        .create('products', {
                            ...data,
                            poster: url,
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                    })
            })
            .finally(() => {
                this.toggleisLoading()
            })
    }

    componentDidMount() {
        this.form.init(this.querySelector('.form-data'), {})
        this.addEventListener('submit', this.form.handleSubmit(this.createProduct))
        if (!authService.user) {
            this.dispatch('change-route', { target: appRoutes.signUp })
        }
    }

    render() {
        return `
            <avion-preloader is-loading="${this.state.isLoading}">
                <section>
                    <div class="admin-form">
                        <admin-form></admin-form>
                    </div>
                </section>
            </avion-preloader>
        `
    }
}

customElements.define('admin-page', AdminPage)