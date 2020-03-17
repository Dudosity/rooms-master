import {Component, DoCheck, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {APIService} from '../api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck {
  rooms_object: any;
  rooms_object_n1: any;
  rooms_big_object: any;
  current_city='';
  constructor(private api: APIService, private router:Router, private location: Location) { }


  ngOnInit(): void {
      switch (this.location.path()) {
        case '':{
          this.current_city = this.location.path();
          break;
        }
        case '/msc':{

          this.current_city = this.location.path();
          break;
        }
        case '/vvo':{


          this.current_city = this.location.path();
          break;
        }
      }
    this.getroom(this.current_city);



  }


    shuffle(list) {
    return list.reduce((p, n) => {
      const size = p.length;
      const index = Math.trunc(Math.random() * (size - 1));
      p.splice(index, 0, n);
      return p;
    }, []);
  };
  getroom(city:string){
    switch (city) {
      case '':{
        this.api.getcian().subscribe(data => {
          this.rooms_object = data['items'];
          console.log(this.rooms_object);
        });

        this.api.getn1().subscribe(data =>{
          this.rooms_object_n1 = data['result'];
          console.log(this.rooms_object_n1);
          Array.prototype.push.apply(this.rooms_object, this.rooms_object_n1);
          this.rooms_object = this.shuffle(this.rooms_object);
        });
        break;
      }
      case 'msc':{


        break;
      }
      case 'vvo':{


        
        break;
      }


    }

  }

  ngDoCheck(): void {
    console.log(this.location.path());
    console.log(this.current_city);
    if (this.current_city != this.location.path()){


    switch (this.location.path()) {
      case '':{
        this.rooms_object = [];
        this.current_city = this.location.path();
        this.getroom(this.location.path());
        break;
      }
      case '/msc':{
        this.rooms_object = [];
        this.current_city = this.location.path()
        this.getroom(this.location.path());
        break;
      }
      case '/vvo':{
        this.rooms_object = [];
        this.current_city = this.location.path()
        this.getroom(this.location.path());
        break;
      }
    }
    }
  }

}
