import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { SetBackground } from 'src/app/CustomDirectives/SetBackground.directive';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {



@Input() productListComp:ProductListComponent=undefined;

product:Product=undefined;
ngOnInit(){
  this.product=this.productListComp.selectedProduct;

}

}
