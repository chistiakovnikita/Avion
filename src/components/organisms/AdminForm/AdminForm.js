import { appCategories } from "../../../constants/appCategories";
import { Component } from "../../../core";
import './adminForm.scss'

export class AdminForm extends Component {
    render() {
        return`
            <h2 class="admin-page-title headline-two">Admin panel</h2>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-12">
                    <form class="form-data">
                        <div class="mb-3">
                        <label class="form-label">Title</label>
                        <input class="form-control" type="text" name="title">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Product category</label>
                            <select class="form-select" name="category">
                                ${appCategories.map((item) => {
                                    return`
                                        <option value="${item.value}">${item.label}</option>
                                    `
                                })
                                .join(' ')
                                }
                            </select>
                        </div>

                        <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input class="form-control" type="text" name="price">
                        </div>

                        <div class="mb-3">
                        <label class="form-label">Description</label>
                        <input class="form-control" type="text" name="description">
                        </div>
                        
                        <div class="mb-3">
                        <label class="form-label">Upload a poster</label>
                        <input class="form-control" type="file" id="formFile" name="poster">
                        </div>
                        
                        
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                    </div>
                <div>
            </div>
        `
    }
}

customElements.define('admin-form', AdminForm)