import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/tokenStorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService:TokenStorageService,private router:Router, private activatedRoute:ActivatedRoute,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  onLoginSignup(){
    this.router.navigate(['register']);
  }
  onLogout()
  {
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);

  }
}
