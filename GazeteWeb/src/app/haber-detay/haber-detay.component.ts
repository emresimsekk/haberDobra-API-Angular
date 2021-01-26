import { Component, Input, OnInit } from '@angular/core';
import { News } from '../_model/Model';

@Component({
  selector: 'app-haber-detay',
  templateUrl: './haber-detay.component.html',
  styleUrls: ['./haber-detay.component.css']
})
export class HaberDetayComponent implements OnInit {

@Input() haber:News;

  constructor() { }

  ngOnInit(): void {
  }
  

}
