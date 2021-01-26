import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../_model/Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaberserviceService {
  baseUrl:string="http://localhost:3002/";

  constructor(private http:HttpClient) { }

  addHaber(haber:News): Observable<News>{
    return this.http.post<News>(this.baseUrl+'api/news/',haber);
    }

    updateHaber(haber:News){
      return this.http.put<News>(this.baseUrl+'api/news/'+haber.id,haber);
      }
      deleteHaber(haber:News): Observable<News>{
        return this.http.delete<News>(this.baseUrl+'api/news/'+haber.id);

     }

     getHaber():Observable<News[]> {
      return this.http.get<News[]>(this.baseUrl+'api/news');
      
    }



}
