import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../services/users.service';
import { ProductCardsService, productItem } from '../services/product-cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[] = [];
  email: string = '';
  password: string = '';
  modal: string | null = null;
  currentUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  }
  accountButton: boolean = false;
  signInButton: boolean = true;
  productsCartList: productItem[] = [];
  cartEmpty: boolean = true;
  cartNotEmpty: boolean = false;
  totalPrice: any = 0;
  newUser: User ={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private usersService: UsersService, private router: Router, private productsCardService: ProductCardsService) { }

  ngOnInit(): void {
    this.calculateTotalPrice();
  } 

  ngOnChange(): void {
    this.getCartProducts();
  }
  
  getUsers(): void {
    // this.usersService.getUsers().subscribe((u) => (this.users = u));
    this.users = this.usersService.getUsers();
  }

  signIn(email: string, password: string): void {
    this.getUsers();
    if(this.checkUsers(this.users, email, password)) {
      this.modal = 'modal';
    };
    this.accountButton = true;
    // this.signInButton = false;
  }

  private checkUsers(users: User[], email: string, password: string): boolean {
    let isFound = false;
    users.forEach((user) => {
      if (email === user.email && password === user.password) {
        this.usersService.setCurrentUser(user);
        this.usersService.getCurrentUser();
        isFound = true;
      };
    });
    return isFound ? true : false;
  }
  
  getCartProducts() {
   this.productsCartList = this.productsCardService.getCartProducts();
   if(this.productsCartList.length > 0) {
     this.cartEmpty = false;
     this.cartNotEmpty = true;
   };
   this.calculateTotalPrice();
  }
  
  calculateTotalPrice() {
   let sum = 0;
   this.productsCartList.forEach((p) => sum += p.productPrice);
   this.totalPrice = sum;
  //  this.totalPrice = this.productsCartList.reduce(product => product.productPrice + this.totalPrice);
  }
  
  addUser(): void {
    if(this.usersService.addUser(this.newUser) == true) {
    this.router.navigateByUrl('/signin');
    };
  }

   
}
