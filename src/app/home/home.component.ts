import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedback = {
    email: '',
    name: '',
    message: '',
  }

  constructor() {
    
   }

  ngOnInit(): void {
    
   
  }

  slide(){
   
  }

  saveMessage() {
    if(this.feedback.email.length !== 0 || this.feedback.name.length !== 0 || this.feedback.message.length !== 0){
      console.log(this.feedback);
    } 
  }

}
