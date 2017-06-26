import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

function mapToJSON(response){
  return response.json();
}

@Injectable()
export class ScanService {

  constructor(private http: Http) {

  }

  postScan(scan: any) : Observable<any> {
    return this.http.post('/api/scans', scan)
    .map(mapToJSON);
  } 

  getScans() : Observable<any> {
    return this.http.get('/api/scans')
    .map(mapToJSON);
  }

  getScanById(id: String) : Observable<any> {
    return this.http.get(`/api/scans/${id}`)
    .map(mapToJSON);
  } 

  deleteScanById(id: String) : Observable<any> {
    return this.http.delete(`/api/scans/${id}`)
    .map(mapToJSON);
  }

  postScanResult(scanResult: any) : Observable<any> {
    return this.http.post('/api/scanResults', scanResult)
    .map(mapToJSON);
  } 

  getScanResults() : Observable<any> {
    return this.http.get('/api/scanResults')
    .map(mapToJSON);
  }

  getScanResultById(id: String) : Observable<any> {
    return this.http.get(`/api/scanResults/${id}`)
    .map(mapToJSON);
  } 

  deleteScanResultById(id: String) : Observable<any> {
    return this.http.delete(`/api/scanResults/${id}`)
    .map(mapToJSON);
  }

}
