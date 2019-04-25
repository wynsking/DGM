import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  errorMessage:string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService , private router:Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.signUpForm=this.formBuilder.group(
      {
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required,Validators.pattern(/[0-9a-zA-Z]{6,}/)]] }
    );
  }
  onSubmit(){
    const email= this.signUpForm.get('email').value;
    const password=this.signUpForm.get('password').value;
    this.authService.createNewUser(email,password).then(
      ()=>{
        this.router.navigate(['/books']);
      },
    (error)=>{
        this.errorMessage=error;
    }
    );
  }

}
