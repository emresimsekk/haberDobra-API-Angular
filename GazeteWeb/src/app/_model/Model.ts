import { stringify } from "@angular/compiler/src/util";
import { mainModule } from "process";


export class Model
{
  haberler:News[];
}

export class News{
  id: number;
  categoryID:number;
  title: string;
  content:string;
  thumbnail:string;
  createdByID: number;
  modifiedByID: number;
  updatedAt:Date;
  createdAt:Date;


  



  constructor(id: number,categoryID:number,title: string, content:string,thumbnail:string, createdByID: number,modifiedByID: number,updatedAt:Date,createdAt:Date) {
    this.id=id;
    this.categoryID=categoryID;
    this.title=title;
    this.content=content;
    this.thumbnail=thumbnail;
    this.createdByID=createdByID;
    this.modifiedByID=modifiedByID;
    this.updatedAt=updatedAt;
    this.createdAt=createdAt;
  }
}

export class Category{
  id:number;
  name:string;
  createdByID:number;
  modifiedByID:number;
  createdAt:Date;
  updatedAt:Date;  
 
 
  constructor(id:number,name:string,createdByID:number,modifiedByID:number,createdAt:Date,updatedAt:Date) {
    this.id=id;
    this.name=name;
    this.createdByID=createdByID;
    this.modifiedByID=modifiedByID;
    this.createdAt=createdAt;
    this.updatedAt=updatedAt;
  }


}
