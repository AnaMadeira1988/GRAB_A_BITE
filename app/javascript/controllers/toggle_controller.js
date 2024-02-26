import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleableElem", "toggleableDisplay", "toggleablePaymentButtons", "toggleableBookButton", "toggleableCancelButton", "toggleableFinalizeButton"]

  addBg() {
    this.toggleableElemTarget.addEventListener("mouseover", () => {
      this.toggleableElemTarget.classList.add('bg-light');
    });

    this.toggleableElemTarget.addEventListener("mouseout", () => {
      this.toggleableElemTarget.classList.remove('bg-light');
    });
  }

  togglePayment() {
    const toggleables = [this.toggleableDisplayTarget, this.toggleablePaymentButtonsTarget, this.toggleableBookButtonTarget];
    toggleables.forEach(toggleable => toggleable.classList.toggle('d-none'));
  }
  cancelPayment() {
    const toggleables = [this.toggleableDisplayTarget, this.toggleablePaymentButtonsTarget, this.toggleableBookButtonTarget];
    toggleables.forEach(toggleable => toggleable.classList.toggle('d-none'));
  }

  toggleNotif() {
    this.toggleableElemTarget.classList.add('d-none');
  }
}
