import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdataService } from '../services/ecomdata.service';
import { Product } from '../interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detials',
  templateUrl: './detials.component.html',
  styleUrls: ['./detials.component.css']
})
export class DetialsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService){}

  mainSlide: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    items:1,
    nav: true
  }

  productDetails: Product = {} as Product; 

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
    {
      next:( params)=>{
       let  idProduct:any =  params.get('id');

        this._EcomdataService.getProductDetails(idProduct).subscribe({
          next:(response)=>{
           this.productDetails = response.data;
          }
        })

      //  console.log(idProduct);

      }
    }
    )
  }
}
