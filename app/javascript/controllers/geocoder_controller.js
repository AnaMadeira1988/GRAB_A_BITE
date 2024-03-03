import { Controller } from "@hotwired/stimulus";
import mapboxgl from 'mapbox-gl';

// Connects to data-controller="geocoder"
export default class extends Controller {
  static values = { address: String, apiToken: String, city: String }
  connect() {
    mapboxgl.accessToken = this.apiTokenValue;
    console.log(this.cityValue)
    const urlCity = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.cityValue}.json?access_token=${mapboxgl.accessToken}`;

    const urlAddress = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.addressValue}.json?access_token=${mapboxgl.accessToken}`;

    fetch(urlCity)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        const coordinates = data.features[0].center;

        const mapSmall = new mapboxgl.Map({
          container: 'map-small',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: coordinates,
          zoom: 10
        });
      });

    fetch(urlAddress)
      .then(response => response.json())
      .then((data) => {
        const coordinates = data.features[0].center;

        const mapBig = new mapboxgl.Map({
          container: 'map-big',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: coordinates,
          zoom: 12
        });

        new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(mapBig);
      });
  }
}
