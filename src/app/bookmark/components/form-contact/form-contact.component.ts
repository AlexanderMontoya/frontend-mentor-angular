import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {

  public formContact:FormGroup = this.fb.group(
    {
      email: ["", [Validators.required, Validators.email]]
    }
  )

  constructor(private fb:FormBuilder){}

  get email():FormControl{
    return this.formContact.get("email") as FormControl
  }

  isValidField( field:string ): boolean | null{
    return this.formContact.controls[field].errors
      && this.formContact.controls[field].touched;
  }

  getFieldError( field:string ): string | null{
    if(!this.formContact.controls[field]) return null;

    const errors = this.formContact.controls[field].errors || {}

    for (const key of Object.keys(errors)){
      switch(key){
        case 'required':
          return "This field is required";
        case 'email':
          return `Whoops, make sure it's an email`;
      }
    }

    return null

  }

  onSubmit(){
    if(this.formContact.invalid) return

    console.log(this.formContact.value);
  }
}
