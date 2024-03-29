import { Controller } from "@hotwired/stimulus"
import Swal from "sweetalert2";

// Connects to data-controller="alerts"
export default class extends Controller {
  static values = { notice: String, alert: String }

  connect() {

    const content = this.noticeValue || this.alertValue;

    if (content) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 1500,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: content === this.noticeValue ? "success" : "error",
        title: content
      });
    }
  }
}
