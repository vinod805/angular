import { Directive, ElementRef } from "@angular/core"

@Directive({
    selector:'[setBackgrounds]'
})
export class SetBackground{
//private elementref;
constructor( private element:ElementRef){
// this.elementref=element;
// element.nativeElement.style.backgroundColor='red'
console.log('directive iniated')
}
ngOnInit(){
    this.element.nativeElement.style.backgroundColor='#36454F';
    this.element.nativeElement.style.color='white';
    console.log('directive init iniated')
}
}