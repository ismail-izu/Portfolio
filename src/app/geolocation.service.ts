import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {

  private geoApiUrl = 'https://ipapi.co/json/';
  constructor(private http: HttpClient) { }

  getCountryDetails = () => this.http.get<any>(this.geoApiUrl);
}
