import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true, 
  imports: [RouterModule]
})

export class MapComponent implements AfterViewInit {
  private map !: L.Map;

  markers: L.Marker[] = [
    L.marker([21.0279, 105.7942]), // Minh Nguyen
  ];

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 16.5, 105.5795 ],
      zoom: 6
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private addMarkers(): void {
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }
}
