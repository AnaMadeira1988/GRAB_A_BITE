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
            'rgb(140, 185, 189)',
            'rgb(246, 177, 122)',
            'rgb(199, 220, 167)'
          ],
          hoverOffset: 4
        }]
      }
    });
  }
}
