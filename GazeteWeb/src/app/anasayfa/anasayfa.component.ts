import { Component, OnInit } from '@angular/core';
import { Category, News } from '../_model/Model';
import { CategoryService } from '../_services/category.service';
import { HaberserviceService } from '../_services/haberservice.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  constructor(private habeService: HaberserviceService, private categoriService: CategoryService) { }

  haberler: News[] = [];
  kategoriler: Category[] = [];
  kategorifiltrehaber: News[] = [];
  kategorili:boolean=false;
  normal:boolean=true;
  secilihaber:News;
  haberdetay:boolean=false;

  ngOnInit(): void {
    this.getHaberler();
    this.getKategori();

  }

  getHaberler() {

    this.habeService.getHaber().subscribe(News => {
      this.haberler = News
      console.log(News);
    });
  }

  getKategori() {
    this.categoriService.getKategori().subscribe(Category => {
      this.kategoriler = Category
    });

  }
  kategorilist(kategori: Category) {
    
    console.log(kategori);
    this.kategorifiltrehaber=[];
    this.haberler.forEach(element => {
      if (element.categoryID == kategori.id) {
        this.kategorifiltrehaber.push(element)
      }
      this.kategorili=true;
      this.normal=false;
    });
  }
  butunhaberler(){
    this.normal=true;
    this.kategorili=false;
  }
  HaberSec(haber:News){
    this.secilihaber=haber;
    this.haberdetay=true;
    
  }




}
