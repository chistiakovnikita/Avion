import { Component } from "../../../core";
import './adminForm.scss'

export class AdminForm extends Component {
    render() {
        return`
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-12">
                    <form class="send-data">
                        <div class="mb-3">
                        <label class="form-label">Type movie name</label>
                        <input class="form-control" type="text" name="title">
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Movie rating</label>
                        <input class="form-range" type="range" name="rating" min="0" max="5" step="0.5">
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Upload a poster</label>
                        <input class="form-control" type="file" id="formFile" name="poster">
                        </div>
                        <div class="mb-3">
                        <label class="form-label">Chose a genre</label>
                        <select class="form-select" name="genre">
                            <option selected value="action">Action</option>
                            <option value="horror">Horror</option>
                            <option value="drama">Drama</option>
                            <option value="comedy">Comedy</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea name="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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