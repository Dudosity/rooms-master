import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private current_url: string;

  constructor(private router:Router, private location: Location) { }
  selected = 'option1';
  selected_city= 'Санкт-Петербурге';
  ngOnInit(): void {
    this.router.events.subscribe(val => {
      switch (this.location.path()) {
        case '':{
          this.selected_city = 'Санкт-Петербурге'
          break;
        }
        case '/msc':{

          this.selected_city = 'Москве'
          break;
        }
        case '/vvo':{

          this.selected_city = 'Владивостоке'
          break;
        }
      }
    });

  }

  chage_city() {
    this.router

  }
}
