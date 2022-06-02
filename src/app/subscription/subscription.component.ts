import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  newEmail: string = '';

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  addEmail() {
    this.emailService.addEmail(this.newEmail);
    this.newEmail = '';
  }
}
