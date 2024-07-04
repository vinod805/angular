import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input()
all:number=0;

@Input()
inStock:number=0;

@Input()
outOfStock:number=0;
selectedFilteredRadioButton:string='all';

@Output()
selectedFilteredRadioButtonChanged:EventEmitter<string> =new EventEmitter<string>();

onselectedFilteredRadioButtonChanged(){
  this.selectedFilteredRadioButtonChanged.emit(this.selectedFilteredRadioButton)
}


}
