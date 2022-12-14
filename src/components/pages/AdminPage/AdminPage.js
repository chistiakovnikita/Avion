import { appRoutes } from "../../../constants/appRoutes";
import { Component } from "../../../core";
import { authService } from "../../../services";

export class AdminPage extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
        if (!authService.user) {
            window.dispatch('change-route', { target: appRoutes.signUp })
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