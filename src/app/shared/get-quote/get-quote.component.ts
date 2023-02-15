import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit,ChangeDetectionStrategy , ViewChild } from '@angular/core';

 

export class TuiStepperExample1 {}

import { FormControl } from "@angular/forms";


declare var google;

@Component({
  selector: 'aa-get-quote',
  templateUrl: './get-quote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  @ViewChild("search")
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  
 
  private searchElementRef: ElementRef;
  

  
  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

 

}
