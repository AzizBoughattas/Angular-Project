import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  
  // @HostBinding('class.open') check=false;
  // constructor() { }                                //tenzel al button bch thelha o taawed tezel ala button bch tsakarha

  // @HostListener('click') mouseclick(){
  //   this.check = !this.check;
  // }

  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
  //tenzel win iji bch tsaker
}

