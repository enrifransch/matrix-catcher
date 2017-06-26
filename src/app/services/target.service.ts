import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

function mapToJSON(response){
  return response.json();
}

@Injectable()
export class TargetService {

  constructor(private http: Http) {

  }

  postTarget(target: any) : Observable<any> {
    return this.http.post('/api/targets', target)
    .map(mapToJSON);
  } 

  getTargets() : Observable<any> {
    return this.http.get('/api/targets')
    .map(mapToJSON);
  }

  getTargetById(id: String) : Observable<any> {
    return this.http.get(`/api/targets/${id}`)
    .map(mapToJSON);
  } 

  deleteTargetById(id: String) : Observable<any> {
    return this.http.delete(`/api/targets/${id}`)
    .map(mapToJSON);
  }

}
