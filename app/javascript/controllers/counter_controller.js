import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter"
export default class extends Controller {
  static targets = ["input", "counterDisplay", "maxDisplay"]

  updateCounter() {
    if (this.inputTarget.value.length > 288) {
      this.inputTarget.classList.add('bg-danger-subtle');
      this.counterDisplayTarget.innerText = `Max exceeded by ${this.inputTarget.value.length - 288} characters`;
      this.maxDisplayTarget.classList.add('text-danger');
    } else {
      this.inputTarget.classList.remove('bg-danger-subtle');
      this.maxDisplayTarget.classList.remove('text-danger');
      if (this.inputTarget.value.length === 0) {
        this.counterDisplayTarget.innerText = '';
      } else {
        this.counterDisplayTarget.innerText = `${this.inputTarget.value.length} characters`;
      }
    }
  }
}
