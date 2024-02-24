import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dashboard"
export default class extends Controller {
  static targets = ["openBites", "bookedBites", "pendingBites", "openBitesLink", "bookedBitesLink", "pendingBitesLink"]

  openBites() {
    this.openBitesTarget.classList.remove("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.add("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
  }

  bookedBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.remove("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.add("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
  }

  pendingBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.remove("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.add("active", "text-dark")
  }
}
