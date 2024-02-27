import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["input", "counterDisplay"]

  updateCounter() {
    if (this.inputTarget.value.length > 288) {
      this.inputTarget.classList.add('bg-danger-subtle');
      this.counterDisplayTarget.innerText = `Number of characters exceeded by ${this.inputTarget.value.length - 288} characters`;
    } else {
      this.inputTarget.classList.remove('bg-danger-subtle');
      this.counterDisplayTarget.innerText = `${this.inputTarget.value.length} characters`;
    }
  }
}
