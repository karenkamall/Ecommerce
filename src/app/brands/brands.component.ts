import { Component } from '@angular/core';
import { EcomdataService } from './../services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  constructor(private _EcomdataService:EcomdataService){}

  Brands:any[] =[];

  ngOnInit(): void {
    this._EcomdataService.getBrands().subscribe(
      {
        next:(response)=>{
        
         this.Brands=response.data;
        console.log(response.data);
          
        }
      }
    )
  }

}
