import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../_model/Model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:3002/";

  addKategori(kategori:Category): Observable<Category>{
    return this.http.post<Category>(this.baseUrl+'api/categories/',kategori);
    }

    updateKategori(kategori:Category){
      return this.http.put<Category>(this.baseUrl+'api/categories/'+kategori.id,kategori);
      }
      deleteKategori(kategori:Category): Observable<Category>{
        return this.http.delete<Category>(this.baseUrl+'api/categories/'+kategori.id);

     }

     getKategori():Observable<Category[]> {
      return this.http.get<Category[]>(this.baseUrl+'api/categories');
      
    }
}
