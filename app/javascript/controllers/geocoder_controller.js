import { Controller } from "@hotwired/stimulus";
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiYm91N21pZCIsImEiOiJjbHI2aWM0NXcxeW0yMmpvMTBoazJidXhkIn0.2x7Rbj3K-JvzqCUVSYI-Pw';

// Connects to data-controller="geocoder"
export default class extends Controller {
  static values = { address: String, city: String }

  connect() {
    const urlCity = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.cityValue}.json?access_token=${mapboxgl.accessToken}`;

    const urlAddress = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.addressValue}.json?access_token=${mapboxgl.accessToken}`;

    fetch(urlCity)
      .then(response => response.json())
      .then((data) => {
        const coordinates = data.features[0].center;

        const mapSmall = new mapboxgl.Map({
          container: 'map-small',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: coordinates,
          zoom: 10
        });

        new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(mapSmall);
      });

    fetch(urlAddress)
      .then(response => response.json())
      .then((data) => {
        const coordinates = data.features[0].center;
        console.log(data);

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
