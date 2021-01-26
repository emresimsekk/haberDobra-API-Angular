import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category, Model, News } from '../_model/Model';
import { CategoryService } from '../_services/category.service';
import { HaberserviceService } from '../_services/haberservice.service';

@Component({
  selector: 'app-haberduzenle',
  templateUrl: './haberduzenle.component.html',
  styleUrls: ['./haberduzenle.component.css']
})
export class HaberduzenleComponent implements OnInit {
  kategoriler:Category[]=[]

  constructor(private categoriService: CategoryService, private haberService: HaberserviceService) { }

  ngOnInit(): void {
    this.getKategori();
  }

  saveKategori(name:string){
    
    const kategori1= new Category(0,name,0,0,null,null);
    this.categoriService.addKategori(kategori1).subscribe(p=>{
      this.kategoriler.push(kategori1);
      console.log(this.kategoriler);
    });
  

  }
  delete(kategori:Category){
    this.categoriService.deleteKategori(kategori).subscribe(p=>{
      this.kategoriler.splice(this.kategoriler.findIndex(p=>p.id==kategori.id),1);
    });
    }

  getKategori() {
    this.categoriService.getKategori().subscribe(Category => {
      this.kategoriler = Category
    });

  }

  saveHaber(kategoriid:number,title:string,content:string){
    
const haber=new News(0,kategoriid,title,content,"",null,null,null,null);
this.haberService.addHaber(haber).subscribe();
console.log(content);
  }

}
