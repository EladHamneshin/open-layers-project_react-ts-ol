// import { Control } from "ol/control";

// class MarkerControl extends Control {
//     constructor(opt_options: {target:o}) {
//       const options = opt_options || {};
  
//       const button = document.createElement('button');
//       button.innerHTML = 'N';
  
//       const element = document.createElement('div');
//       element.className = 'rotate-north ol-unselectable ol-control';
//       element.appendChild(button);
  
//       super({
//         element: element,
//         target: options.target,
//       });
  
//       button.addEventListener('click', this.handleRotateNorth.bind(this), false);
//     }
  
//     handleRotateNorth() {
//       this.getMap()!.getView().setRotation(0);
//     }
//   }
  