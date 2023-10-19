import TileLayer from "ol/layer/Tile";
import TileJSON from "ol/source/TileJSON";


const tileLayer = new TileLayer({
    visible: true,
    source: new TileJSON({
      url: "https://api.maptiler.com/maps/basic-v2/tiles.json?key=0H0Rds7Cl3tl21zIes0M",
      tileSize: 512,
      crossOrigin: 'anonymous'
    })
});


export default tileLayer;