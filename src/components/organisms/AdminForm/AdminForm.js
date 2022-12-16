import { Component } from "../../../core";
import './adminForm.scss'

export class AdminForm extends Component {
    render() {
        return`
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-12">
                    <form class="form-data">
                        <div class="mb-3">
                        <label class="form-label">title</label>
                        <input class="form-control" type="text" name="title">
                        </div>

                        <div class="mb-3">
                        <label class="form-label">price</label>
                        <input class="form-control" type="text" name="price">
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