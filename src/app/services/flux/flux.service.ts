import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerService} from '../server/server.service';
@Injectable({
  providedIn: 'root'
})
export class FluxService {

  private baseUrl = 'http://127.0.0.1:82/rest/fluxs';
  constructor(private http: HttpClient) {}

  fluxs:any=[];
  getFluxs(){
    return this.http.get(`${this.baseUrl}`);
  }
  createFlux(flux: object, id_serveur: number): Observable<object> {
    return this.http.post(`${this.baseUrl}/${id_serveur}`,flux);
  }
  getServersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/serversList`);
  }
  
  getFluxById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getFluxByServerId(id: number): Observable<any> {
    return this.http.get(`http://127.0.0.1:82/rest/fluxs/fluxsByServers/${id}`); 
  }
}
