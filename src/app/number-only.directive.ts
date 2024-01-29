import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {

  constructor() { }
  @HostListener('keydown',['$event'])
  onKeyDown(event:KeyboardEvent){
    return this.isNumberKey(event);
  }
  isNumberKey(event:KeyboardEvent):boolean{
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    return allowedKeys.includes(event.key)
  }

}
