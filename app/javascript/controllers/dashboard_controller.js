import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dashboard"
export default class extends Controller {
  static targets = ["openBites", "bookedBites", "pendingBites", "openBitesLink", "bookedBitesLink", "pendingBitesLink", "hostLink", "guestLink", "hostDashboard", "guestDashboard", "guestBookedBites", "guestPendingBites", "guestPendingBitesLink", "guestBookedBitesLink", "expiredBitesLink", "expiredBites", "historyBites", "historyBitesLink", "guestHistoryBites", "guestHistoryBitesLink", "guestFavouriteBites", "guestFavouriteBitesLink"]

  guestDashboard() {
    this.hostLinkTarget.classList.remove("active", "fw-semibold")
    this.hostLinkTarget.classList.add("text-body-tertiary")
    this.guestLinkTarget.classList.remove("text-body-tertiary")
    this.guestLinkTarget.classList.add("active", "fw-semibold")
    this.hostDashboardTargets.forEach((target) => {
      target.classList.add("d-none")
    })
    this.guestDashboardTargets.forEach((target) => {
      target.classList.remove("d-none")
    })
  }
  hostDashboard() {
    this.guestLinkTarget.classList.remove("active", "fw-semibold")
    this.guestLinkTarget.classList.add("text-body-tertiary")
    this.hostLinkTarget.classList.remove("text-body-tertiary")
    this.hostLinkTarget.classList.add("active", "fw-semibold")
    this.guestDashboardTargets.forEach((target) => {
      target.classList.add("d-none")
    })
    this.hostDashboardTargets.forEach((target) => {
      target.classList.remove("d-none")
    })
  }

  openBites() {
    this.openBitesTarget.classList.remove("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.add("active", "text-dark", "open-bites")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
  }

  bookedBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.remove("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark", "open-bites")
    this.bookedBitesLinkTarget.classList.add("active", "text-dark", "booked-bites")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
  }

  pendingBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.remove("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark", "open-bites")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.pendingBitesLinkTarget.classList.add("active", "text-dark", "pending-bites")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
  }

  historyBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.remove("d-none")
    this.expiredBitesTarget.classList.add("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark", "open-bites")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.historyBitesLinkTarget.classList.add("active", "text-dark", "other-bites")
    this.expiredBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
  }

  expiredBites() {
    this.openBitesTarget.classList.add("d-none")
    this.bookedBitesTarget.classList.add("d-none")
    this.pendingBitesTarget.classList.add("d-none")
    this.historyBitesTarget.classList.add("d-none")
    this.expiredBitesTarget.classList.remove("d-none")
    this.openBitesLinkTarget.classList.remove("active", "text-dark", "open-bites")
    this.bookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.pendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.historyBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.expiredBitesLinkTarget.classList.add("active", "text-dark", "other-bites")
  }

  guestBookedBites() {
    this.guestBookedBitesTarget.classList.remove("d-none")
    this.guestPendingBitesTarget.classList.add("d-none")
    this.guestHistoryBitesTarget.classList.add("d-none")
    this.guestFavouriteBitesTarget.classList.add("d-none")
    this.guestBookedBitesLinkTarget.classList.add("active", "text-dark", "booked-bites")
    this.guestPendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.guestHistoryBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.guestFavouriteBitesLinkTarget.classList.remove("active", "text-dark", "favourite-bites")
  }

  guestPendingBites() {
    this.guestBookedBitesTarget.classList.add("d-none")
    this.guestPendingBitesTarget.classList.remove("d-none")
    this.guestHistoryBitesTarget.classList.add("d-none")
    this.guestFavouriteBitesTarget.classList.add("d-none")
    this.guestBookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.guestPendingBitesLinkTarget.classList.add("active", "text-dark", "pending-bites")
    this.guestHistoryBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.guestFavouriteBitesLinkTarget.classList.remove("active", "text-dark", "favourite-bites")
  }

  guestFavouriteBites() {
    this.guestBookedBitesTarget.classList.add("d-none")
    this.guestPendingBitesTarget.classList.add("d-none")
    this.guestHistoryBitesTarget.classList.add("d-none")
    this.guestFavouriteBitesTarget.classList.remove("d-none")
    this.guestBookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.guestPendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.guestHistoryBitesLinkTarget.classList.remove("active", "text-dark", "other-bites")
    this.guestFavouriteBitesLinkTarget.classList.add("active", "text-dark", "favourite-bites")
  }

  guestHistoryBites() {
    this.guestBookedBitesTarget.classList.add("d-none")
    this.guestPendingBitesTarget.classList.add("d-none")
    this.guestHistoryBitesTarget.classList.remove("d-none")
    this.guestFavouriteBitesTarget.classList.add("d-none")
    this.guestBookedBitesLinkTarget.classList.remove("active", "text-dark", "booked-bites")
    this.guestPendingBitesLinkTarget.classList.remove("active", "text-dark", "pending-bites")
    this.guestHistoryBitesLinkTarget.classList.add("active", "text-dark", "other-bites")
    this.guestFavouriteBitesLinkTarget.classList.remove("active", "text-dark", "favourite-bites")
  }
}
