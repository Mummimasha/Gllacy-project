import { Injectable } from '@angular/core';
import { users } from '../mock/mock-users';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private currentUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  }

  constructor() {}

  // getUsers(): Observable<User[]> {
  //   // return of(users);
  // }

  getUsers(): User[] {
    return users;
  }

  addUser(user: User): boolean {
    if (user.email.length > 0 && user.password.length > 0) {
      users.push(user);
      return true;
    } else {
      return false;
    };
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  updateUser(user: User, newUserData: User): boolean {
    this.getUsers();
    let i = users.findIndex(u => u === user);
    if(i > -1) {
      users.splice(i, 1, newUserData);
      console.log(users);
       return true;
    };
    return false;
  }
}
