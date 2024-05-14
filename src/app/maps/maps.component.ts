import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Geolocation, Position } from '@capacitor/geolocation';



@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent  implements OnInit {

  map!: L.Map
  

  constructor() {}
  ngOnInit() {
    let mymap = L.map('map');
  
    // Ionic icon add to map
    const locationIcon = L.divIcon({
      className: 'ion-icon-location-sharp',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      html: '<ion-icon name="location-sharp"></ion-icon>',
    });
  
    // Asset marker
    const customIcon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  
    const Icon = L.icon({
      iconUrl: 'assets/images/Marker.jpg',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  
    Geolocation.getCurrentPosition().then((position: Position) => {
      const coords = position.coords;
      const latLong: L.LatLngExpression = [coords.latitude, coords.longitude];
      console.log(`lat: ${coords.latitude}, lon: ${coords.longitude}`);
      mymap.setView(latLong, 13);
  
      var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      });
      osm.addTo(mymap);
  
      let marker = L.marker(latLong, { icon: customIcon }).addTo(mymap);
  
      const circle1 = L.circle(latLong, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 75,
      }).addTo(mymap);
  
      const locations: [number, number][] = [
        [23.7807716, 90.3367087],
        [40.4380981, -3.844688],
        [14.5965777, 120.9382742],
        [25.0174463, 121.3412243],
        [27.7090302, 85.2848473],
        [28.527554, 77.0438319],
        [-15.7213696, -48.1025118],
        [-16.5205315, -68.2066505],
        [34.7164258, 10.696165],
        [36.7949919, 10.060705],
        [36.9145409, 10.2901152],
        [36.9455989, 8.7276504],
        [36.7230724, 10.3441758], // my current location
      ];
  
      locations.forEach((location: [number, number]) => {
        L.marker(location, { icon: customIcon }).addTo(mymap)
        .bindPopup('<iframe width="560" height="315" src="https://www.youtube.com/embed/5OTq_F5BNZo?start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> ');
        L.popup();
        L.circle(location, { radius: 100 }).addTo(mymap);
      });
  
      let routingControl: any;
  
      mymap.on('click', function (e: { latlng: any }) {
        if (routingControl) {
          mymap.removeControl(routingControl);
        }
  
        routingControl = L.Routing.control({
          showAlternatives: true,
          lineOptions: {
            styles: [{ color: '#242c81', weight: 7 }],
            extendToWaypoints: true,
            missingRouteTolerance: 10,
          },
          fitSelectedRoutes: true,
          altLineOptions: {
            styles: [{ color: '#ed6852', weight: 7 }],
            extendToWaypoints: true,
            missingRouteTolerance: 10,
          },
          routeWhileDragging: true,
          waypoints: [L.latLng(latLong), e.latlng],
        }).addTo(mymap);
      });
  
      marker.bindPopup('<b>Hi</b>').openPopup();
  
      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('I am Franck')
        .openOn(mymap);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
 

  
 
}
