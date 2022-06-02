import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { emails } from '../mock/mock-email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getEmails(): Observable<string[]> {
    return of (emails);
  }

  addEmail(email: string): boolean {
    emails.push(email);
    return true;
  }
}


