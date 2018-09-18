import { Component } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Tile as TileLayer, Image as ImageLayer} from 'ol/layer.js';
import {OSM, ImageArcGISRest} from 'ol/source.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular ArcGIS MapServer';

  ngOnInit() {
    var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
          'Specialty/ESRI_StateCityHighway_USA/MapServer';

      var layers = [
        new TileLayer({
          source: new OSM()
        }),
        new ImageLayer({
          source: new ImageArcGISRest({
            ratio: 1,
            params: {},
            url: url
          })
        })
      ];
      var map = new Map({
        layers: layers,
        target: 'map',
        view: new View({
          center: [-10997148, 4569099],
          zoom: 4
        })
      });
  }
}
