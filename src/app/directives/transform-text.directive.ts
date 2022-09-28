import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[transformText]'
})
export class TransformTextDirective {
  @Input('transformText') type!: string;
  @HostListener("input") inputEvent(){
    this.transform();
  }

  constructor(private element: ElementRef, private rendered2: Renderer2) { }

  transform(){
    switch(this.type){
      case "curp":
        this.transformCurp();
        break;
      case "positiveInteger":
        this.transformPositiveInteger();
        break;
    }
  }

  transformCurp(){
    let validValue = this.element.nativeElement.value.substr(0,17).toUpperCase()
    this.rendered2.setProperty(this.element.nativeElement, "value", validValue);
  }

  transformPositiveInteger(){
    let regex = /[^0-9]/g
    let validValue = this.element.nativeElement.value.replace(regex, "");
    this.rendered2.setProperty(this.element.nativeElement, "value", validValue);
  }

}
