import { Component, Input, OnInit } from '@angular/core';
import { User, UsersService } from '../services/users.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() currentUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  };
  
  newUserData: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.usersService.getCurrentUser();
    Object.assign(this.newUserData, this.currentUser);

  }

   updateUser() {
     this.usersService.updateUser(this.currentUser, this.newUserData);
     this.usersService.getUsers();
   }
}
