import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[alreadyHave]'
})
export class AlreadyHaveDirective implements OnInit, OnChanges {
  @Input('alreadyHave') alreadyHave!: boolean;

  constructor(private element: ElementRef, private rendered2: Renderer2) {}

  ngOnInit(){
    if(this.alreadyHave){
      this.rendered2.setStyle(this.element.nativeElement, "backgroundColor", "rgb(247, 189, 123)");
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.alreadyHave){
      this.rendered2.setStyle(this.element.nativeElement, "backgroundColor", "rgb(247, 189, 123)");
    }
  }

}
