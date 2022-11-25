import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["list", "form", "counter"]
  static values = {
    position: String
  }

  // connect() {
    // console.log(this.element);
    // console.log(this.listTarget);
    // console.log(this.formTarget.action);
    // console.log(this.positionValue)
  // }

  send(event) {
    event.preventDefault();

    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_review) {
          this.listTarget.insertAdjacentHTML(this.positionValue, data.inserted_review);
        }
        if (data.updated_counter) {
          this.counterTarget.outerHTML = data.updated_counter;
        }
        this.formTarget.outerHTML = data.form;
      })
  }
}
