import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  implements OnInit{

  constructor(private _CartService:CartService){}

  cartDetails:any={};

  removeCartItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
      this.cartDetails = response.data;
      }
    })
  }

  changeCount(id:string , count:number):void{
  if(count > 0){
    this._CartService.UpdateItem(id , count).subscribe({
      next:(response)=>{
        this.cartDetails = response.data;
      }
    })
  }

  }

  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cartDetails=response.data;
      }
    })
  }

}
