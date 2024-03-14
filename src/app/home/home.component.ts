import { Category } from './../interfaces/product';
import { EcomdataService } from './../services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService ,
    private _ToastrService:ToastrService){}
  
 products:Product[]=[]
 
 Categories:any[] =[]

 searchTerm:string='';


 addCart(id:string):void{
  this._CartService.addToCart(id).subscribe(
    {
      next:(response)=>{
        console.log(response)

        this._ToastrService.success(response.message);
       }
    }
  )
 }
 
 categoriesSliderOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
mainSlider: OwlOptions = {
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

  ngOnInit(): void {
    this._EcomdataService.getAllProducts().subscribe( {
      next:(response)=>{
      this.products = response.data;
      }
    } )
    this._EcomdataService.getCategories().subscribe(
      {
        next:(response)=>{
        
         this.Categories=response.data;
          
        }
      }
    )
  }

}