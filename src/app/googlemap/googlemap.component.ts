import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

 title: string = 'Google Map';
  lat: number =  19.1853805;
  lng: number = 74.0947044;
 


//   positions: any;


//  onMapReady(map) {
//     console.log('map', map);
//     console.log('markers', map.markers);   
//   }
//   onIdle(event) {
//     console.log('map', event.target);
//   }
//   onMarkerInit(marker) {
//     console.log('marker', marker);
//   }
//   onMapClick(event) {
//     this.positions.push(event.latLng);
//     event.target.panTo(event.latLng);
//   }


  constructor() { }

  ngOnInit() {
  }

}
