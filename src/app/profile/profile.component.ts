import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  username;
  phone;
  email;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.onGetAUserService().subscribe(data=>
      {
        this.user = data;
        this.username= this.user.username;
        this.email = this.user.email;
        this.phone = this.user.phone;
      });
      
  }

}
