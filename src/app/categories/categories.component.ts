import { Component } from '@angular/core';
import { EcomdataService } from './../services/ecomdata.service';
import {  OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private _EcomdataService:EcomdataService){}

  Categories:any[] =[];

  ngOnInit(): void {
    this._EcomdataService.getCategories().subscribe(
      {
        next:(response)=>{
        
         this.Categories=response.data;
          
        }
      }
    )
  }

}
