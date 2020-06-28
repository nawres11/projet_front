import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  private baseUrl = 'http://localhost:82/rest/servers';

  constructor(private http: HttpClient) {
  }

  servers:any=[];
  getServers(){

    return this.http.get(`${this.baseUrl}`);
    
  }
  getServertById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createServer(server: object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, server);
  }
  updateServer(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
}
