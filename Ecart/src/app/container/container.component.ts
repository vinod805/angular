import { Component, ViewChild } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class containerComponent {

//   addToCart:number=0;
//   product={
// name:'iphone',
// price:500000,
// color:'Black',
// stock:10,
// discount:5,
//  pImage:'assets\\iphone.png'
 
//   }

// getDiascountPrice(){
//   return this.product.price*this.product.discount/100;
// }
// decrrmrntCartValue(){

//   if(this.addToCart>0){
//     this.addToCart--;
//   }
// }
// incrementCartValue(){
// if(this.product.stock > this.addToCart)

//   this.addToCart++;
// }

searchText:string='';
setSearchText(value:string){
 this.searchText= value;
//console.log(this.searchText)
}
@ViewChild(ProductListComponent) productListComponent:ProductListComponent;


}
