import { Component } from '@angular/core';
import {APIService} from './api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest } from "@angular/common/http";
import { HttpEventType } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms_object;
  constructor(private api: APIService) {
  }
  getjson() {

    this.api.getcian().subscribe(data => {
      this.rooms_object = data['items'];
      //console.log(this.rooms_object);
    });


  }
}
