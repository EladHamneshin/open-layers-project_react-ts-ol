import { Feature, Map } from "ol";
import View from "ol/View";
import {defaults as defaultControls} from 'ol/control.js';
import { defaults as interactionDefaults } from "ol/interaction/defaults";
import { fromLonLat, toLonLat } from "ol/proj";
import { Point } from "ol/geom";
import tileLayer from "./layers/tileLayer";
import markerLayer, { addMarker, removeMarker } from "./layers/markerLayer";
import mousePositionControl from "./controls/mousePsititonControl";


export const map = new Map({
  target: "map",
  layers: [tileLayer, markerLayer],
  view: new View({
    center: fromLonLat([ 35.217018, 31.771959]),
    zoom: 7
  }),
  controls: defaultControls().extend([mousePositionControl]),
  interactions: interactionDefaults({})
});


map.on('click', function(evt){

  const clickedMarker = map.forEachFeatureAtPixel(evt.pixel,
    (feature) => {
      return feature;
  });
   
  if (clickedMarker) {
    const marker = clickedMarker as Feature<Point>
    removeMarker(marker)
    return
  }
    
  const clickedCoordinate =  toLonLat( evt.coordinate);
  const newMarker = new Feature({
      geometry: new Point(fromLonLat(clickedCoordinate))
  });
  addMarker(newMarker);

});

// change mouse cursor when over marker
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  const target = map.getTarget()
  if(target && target instanceof HTMLDivElement )
    target.style.cursor = hit ? 'pointer' : '';
});

