import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { Point } from "ol/geom";
import { Feature } from "ol";
import { fromLonLat } from "ol/proj";

const markerLayer = new VectorLayer({
    source: new VectorSource({
        features:[
          new Feature({
            geometry: new Point(fromLonLat([ 35.217018, 31.771959]))
        })
        ]
    }),
    style: new Style({
        image: new Icon({
            anchor: [0.5, 1],
            crossOrigin: 'anonymous',
            src: 'https://docs.maptiler.com/openlayers/default-marker/marker-icon.png',
        })
    })
});


const addMarker = (marker: Feature<Point>)=>{
    const source = markerLayer.getSource()
    
    if(!source)
        return

    source.addFeature(marker)
}

const removeMarker = (marker: Feature<Point>)=>{
    const source = markerLayer.getSource()
    
    if(!source)
        return

    source.removeFeature(marker)
}

export default markerLayer;
export {addMarker, removeMarker}
