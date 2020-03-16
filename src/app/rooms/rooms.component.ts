import { Component, OnInit } from '@angular/core';

import {APIService} from '../api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms_object: any;
  rooms_object_n1: any;
  rooms_big_object: any;

  constructor(private api: APIService) { }


  ngOnInit(): void {

    this.api.getcian().subscribe(data => {
      this.rooms_object = data['items'];
      console.log(this.rooms_object.length);
    });

    this.api.getn1().subscribe(data =>{
      this.rooms_object_n1 = data['result'];
      console.log(this.rooms_object_n1.length);
      Array.prototype.push.apply(this.rooms_object, this.rooms_object_n1);
      this.rooms_object = this.shuffle(this.rooms_object);
    });

  }

    shuffle(list) {
    return list.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);
  };

}
