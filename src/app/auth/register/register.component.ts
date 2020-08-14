import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    errorMessage: String;
  
    constructor(private authenticationService:AuthenticationService,private toastr:ToastrService,
      private router:Router,
      private activatedRoute:ActivatedRoute) { }
  
    ngOnInit() {
      this.initialForm();
    }
  
    private initialForm() {
      this.registerForm = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null, [Validators.required,  Validators.pattern("^[0-9]*$")]),
        'passwords': new FormGroup({
          'password': new FormControl(null, Validators.required),
          'reEnterPassword': new FormControl(null, Validators.required)
        }, this.checkPassword.bind(this))
      });
    }
    onRegister() {
      this.authenticationService.onRegisterService(this.registerForm).subscribe(data=>{
        console.log(data);
        this.toastr.success("Successfully registered");
        this.router.navigate(['/login'], {relativeTo:this.activatedRoute});
  
      },
      err => {
        this.toastr.error("The system failed to register please try again");
      });
  
    }
  
    checkPassword(formGroup: FormGroup) {
      const { value: password } = formGroup.get('password');
      const { value: confirmPassword } = formGroup.get('reEnterPassword');
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }
  }