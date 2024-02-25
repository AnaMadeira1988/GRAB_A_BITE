import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";

const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);
Chart.register(...controllers);

// Connects to data-controller="chart"
export default class extends Controller {
  static values = { bites: Object }

  connect() {
    const labels = Object.keys(this.bitesValue);
    const data = Object.values(this.bitesValue).map(Number);
    new Chart(this.element, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          label: 'My Bite stats',
          data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        animation: false // Disable animation
      }
    });
  }
}
