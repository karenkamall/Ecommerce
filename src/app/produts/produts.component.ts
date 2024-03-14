import { Product } from './../interfaces/product';
import { Component } from '@angular/core';
import { EcomdataService } from './../services/ecomdata.service';


@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent {


  constructor(private _EcomdataService:EcomdataService){}

 Products:any[] =[];

  ngOnInit(): void {
    this._EcomdataService.getAllProducts().subscribe(
      {
        next:(response)=>{
        
         this.Products=response.data;
          
        }
      }
    )
  }
}
