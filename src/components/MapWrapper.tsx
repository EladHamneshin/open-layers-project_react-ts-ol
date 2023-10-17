import { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map } from "ol";
import { map } from "../map/map";

export function useMap() {
  const mapRef = useRef<Map>();
  if (!mapRef.current) {
    mapRef.current = map;
  }
  return mapRef.current;
}

function MapWrapper() {
  const mapDivRef = useRef<HTMLDivElement>(null);
  const map = useMap();

  useEffect(() => {
    if (mapDivRef.current) {
      map.setTarget(mapDivRef.current);
      map.updateSize();
    }
  }, [map]);

  return (<>
    <div id="map" ref={mapDivRef}></div>
    <div id="mouse-position"></div>
  </>

  );
}

export default MapWrapper;