import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


const headers = {'Access-Control-Allow-Origin': 'api.cian.ru','Host': 'api.cian.ru', 'authorization': ' simple eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODMzNTg2NTIsImlkIjoyMTkxNzA4MCwiaXNSZWdpc3RlcmVkIjp0cnVlfQ.VwXfHF-fqRsslmbDr4b321cPZtiTzlEmajGsjp-fh8Y', 'os': 'android', 'buildnumber': '2.127.1', 'versioncode': '21271300', 'device': 'Phone', 'applicationid': '283bca99-48e8-48bd-9b46-d03e1f2cb153', 'package': 'ru.cian.main', 'user-agent': 'Cian/2.127.1 (Android; 21271300; Phone; PRO 7-S; 24; 283bca99-48e8-48bd-9b46-d03e1f2cb153)', 'content-type': 'application/json; charset=UTF-8', 'content-length': '788', 'accept-encoding': 'gzip'};
const qr = {"query":{"_type":"flatrent","sort":{"type":"term","value":"price_object_order"},"foot_min":{"type":"range","value":{"lte":"15"}},"only_foot":{"type":"term","value":"2"},"for_day":{"type":"term","value":"!1"},"with_neighbors":{"type":"term","value":false},"region":{"type":"terms","value":[2]},"bbox":{"type":"term","value":[[30.283021817559984,59.97106345023512],[30.366926933221748,59.90514247903945]]},"room":{"type":"terms","value":[1,2,3,9]},"object_type":{"type":"terms","value":[0]},"building_status":{"type":"term","value":0},"engine_version":{"type":"term","value":"2"},"page":{"type":"term","value":1},"limit":{"type":"term","value":20},"price":{"type":"range","value":{"lte":40000}},"not_last_floor":{"type":"term","value":true},"is_first_floor":{"type":"term","value":false}}};


@Injectable({
  providedIn: 'root'
})
export class APIService {


  constructor(private httpClient: HttpClient) { }
  url = 'https://api.wherehome.tech/';
  url_cian = this.url;
  url_trip = this.url + 'hotels';
  url_n1 = this.url + 'getn1';

  public getcian(){
    return this.httpClient.get(this.url_cian);
  }
  public gettrip(){
    return this.httpClient.get(this.url_trip);
  }
  public getn1(){
    return this.httpClient.get(this.url_n1);
  }
}
