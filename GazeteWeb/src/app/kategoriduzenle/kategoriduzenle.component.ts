import { getLocaleDateTimeFormat } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category, Model, News } from '../_model/Model';
import { CategoryService } from '../_services/category.service';


@Component({
  selector: 'app-kategoriduzenle',
  templateUrl: './kategoriduzenle.component.html',
  styleUrls: ['./kategoriduzenle.component.css']
})
export class KategoriduzenleComponent implements OnInit {

  kategoriler:Category[]=[]

  constructor(private categoriService: CategoryService) { }

  ngOnInit(): void {
    this.getKategori();
  }
  saveKategori(name:string){
    
    const kategori1= new Category(0,name,0,0,null,null);
    this.categoriService.addKategori(kategori1).subscribe(p=>{
      this.kategoriler.push(kategori1);
      console.log(this.kategoriler);
    });
  
    this.ShowToast("Kategori eklendi");

  }

  delete(kategori:Category){
    this.categoriService.deleteKategori(kategori).subscribe(p=>{
      this.kategoriler.splice(this.kategoriler.findIndex(p=>p.id==kategori.id),1);
    });

    this.ShowToast("Kategori silindi");

    }

  getKategori() {
    this.categoriService.getKategori().subscribe(Category => {
      this.kategoriler = Category
    });

  }
  ShowToast(ToastText:string){

    var x = document.getElementById("snackbar");
    x.innerHTML = ToastText;
    x.classList.add("show");
    setTimeout(function(){ x.className = x.className.replace("show", "");}, 3000);
}
}
