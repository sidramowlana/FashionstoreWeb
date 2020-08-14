import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;

  errorMessage: String;
  constructor(private authenticationService: AuthenticationService,private toastr:ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }
  onLogin() {
    this.authenticationService.onLoginService(this.loginForm).subscribe(data => {
      this.tokenStorageService.saveToken(data.token);
      this.tokenStorageService.saveUser(data);
      this.toastr.success("Successfully logged in")
      this.router.navigate(['/home']);
      console.log(data);
    },
      err => {
        this.toastr.error("Login credentials invalid please try again")
      });
  }
  onForgotPassword(){ 
    this.router.navigate(['forgotPassword']);
  }
}
