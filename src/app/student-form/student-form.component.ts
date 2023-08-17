import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  dob: string = '';

  registerForm = new FormGroup ({

    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl(""),
    dob: new FormControl(""),
    class: new FormControl(""),
    address: new FormControl(""),
    mobilenumber: new FormControl(""),
    parentsmail: new FormControl(""),
    pwd: new FormControl(""),
    descp: new FormControl("")
    
    
  })
  submittedData: any

  saveinfo() {
    console.log(this.registerForm);
    this.submittedData = this.registerForm.value; 
  }
}

