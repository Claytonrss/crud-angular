import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[appShadow]',
})
export class ShadowDirective {
  constructor(element: ElementRef) {
    element.nativeElement.classList.add('mat-elevation-z5')
  }
}
