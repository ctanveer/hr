import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  getRoute(map: mapboxgl.Map, start: number[], end: number[]): Observable<any> {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
    return this.http.get(url);
  }
  
  // getRoute(map: mapboxgl.Map, start: number[], end: number[]): Observable<any> {
  //   const url = `https://api.mapbox.com/optimized-trips/v1/mapbox/driving-traffic/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`;
  //   return this.http.get(url);
  // }

//   getIsochrone() {
//     const url = `https://api.mapbox.com/isochrone/v1/mapbox/${this.profile}/${this.lng},${this.lat}?contours_minutes=${this.minutes}&polygons=true&denoise=0.4&generalize=0&access_token=${mapboxgl.accessToken}`;
//   }
}
