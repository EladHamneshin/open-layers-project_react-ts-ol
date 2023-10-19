import { MousePosition } from "ol/control";
import { createStringXY } from "ol/coordinate";

const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
});

export default mousePositionControl;