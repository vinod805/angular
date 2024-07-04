import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string ='';

@Output()
  searchTextChanged:EventEmitter<string> =new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
    
  }

  @ViewChild('searchText') searchInputEL:ElementRef;
  onSearchTextChangedclick(){
    //this.searchTextChanged.emit(this.searchText)
    this.searchText=String(this.searchInputEL.nativeElement.value);
    this.searchTextChanged.emit(this.searchText)
    
  }
}
