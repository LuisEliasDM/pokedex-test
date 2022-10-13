import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'show-error-form',
  templateUrl: './show-error-form.component.html',
  styleUrls: ['./show-error-form.component.scss']
})
export class ShowErrorFormComponent implements OnChanges {
  @Input() errors!: any;
  public errorMessage: string = "";

  constructor() { }

  ngOnChanges(): void{
    if(this.errors?.required){
      this.errorMessage = "This value is required";
      return
    }
    if(this.errors?.minlength){
      this.errorMessage = `Enter at least ${this.errors?.minlength.requiredLength} character`;
      return
    }
    if(this.errors?.maxlength){
      this.errorMessage = `Enter maximun ${this.errors?.maxlength.requiredLength} character`;
      return
    }
    if(this.errors?.maxlength){
      this.errorMessage = `Enter maximun ${this.errors?.maxlength.requiredLength} character`;
      return
    }
    if(this.errors?.email){
      this.errorMessage = `Enter a valid email`;
      return
    }
    this.errorMessage = "";
  }

}
