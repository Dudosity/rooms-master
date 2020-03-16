import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {APIService} from '../api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels_object: any;
  constructor(private router: Router,private api: APIService) { }

  ngOnInit(): void {
    this.hotels_object = this.api.gettrip().subscribe( data => {
      this.hotels_object = data['Response']['hotelList']['list'];
      //console.log(data);


    });
  }

  GoToHotel(hotelid: number) {
    window.location.href = 'https://ru.trip.com/hotels/moscow-hotel-detail-' + hotelid;
  }
}
