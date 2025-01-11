import { AfterViewInit, Component, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import * as L from 'leaflet';

import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-map',
  template: `
    <div class="container-fluid content">
      <div class="px-auto py-3">
          <div class="row">
              <div class="col-lg-6 col-md-12">
                  <div id="map" class="px-5"></div>
              </div>
              <div id="student-info" class="col"></div>
          </div>
      </div>
    </div>
  `,
  styleUrls: ['./map.component.css'],
  standalone: true, 
  encapsulation: ViewEncapsulation.None,
})

export class MapComponent implements AfterViewInit {
  private map !: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 17, 105.5795 ],
      zoom: 6.4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
