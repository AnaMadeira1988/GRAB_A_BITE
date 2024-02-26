import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dashboard"
export default class extends Controller {
  static targets = ["openBites", "bookedBites", "pendingBites", "openBitesLink", "bookedBitesLink", "pendingBitesLink", "toggleableDashboard", "guestBookedBites", "guestPendingBites", "guestPendingBitesLink", "guestBookedBitesLink", "expiredBitesLink", "expiredBites", "historyBites", "historyBitesLink", "guestHistoryBites", "guestHistoryBitesLink"]

  openBites() {
    this.openBitesTarget.classList.remove("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.add("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark")

  }

  bookedBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.remove("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.add("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark")
  }

  pendingBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.remove("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.add("active", "text-dark")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark")
  }

  historyBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.remove("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.historyBitesLinkTarget.classList.add("active", "text-dark")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark")
  }

  expiredBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.remove("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark")
    this.expiredBitesLinkTarget.classList.add("active", "text-dark")
  }

  toggleDashboard() {
    this.toggleableDashboardTargets.forEach((target) => {
      target.classList.toggle("d-none")
    })
  }

  guestBookedBites() {
    this.guestBookedBitesTarget.classList.remove("d-none")
    this.guestPendingBitesTarget.classList.add("d-none")
    this.guestHistoryBitesTarget.classList.add("d-none")
    this.guestBookedBitesLinkTarget.classList.add("active", "text-dark")
    this.guestPendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.guestHistoryBitesLinkTarget.classList.remove("active", "text-dark")
  }

  guestPendingBites() {
    this.guestBookedBitesTarget.classList.add("d-none")
    this.guestPendingBitesTarget.classList.remove("d-none")
    this.guestHistoryBitesTarget.classList.add("d-none")
    this.guestBookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.guestPendingBitesLinkTarget.classList.add("active", "text-dark")
    this.guestHistoryBitesLinkTarget.classList.remove("active", "text-dark")
  }

  guestHistoryBites() {
    this.guestBookedBitesTarget.classList.add("d-none")
    this.guestPendingBitesTarget.classList.add("d-none")
    this.guestHistoryBitesTarget.classList.remove("d-none")
    this.guestBookedBitesLinkTarget.classList.remove("active", "text-dark")
    this.guestPendingBitesLinkTarget.classList.remove("active", "text-dark")
    this.guestHistoryBitesLinkTarget.classList.add("active", "text-dark")
  }
}
