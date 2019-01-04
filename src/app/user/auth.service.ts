import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  currentUser: IUser;

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'John',
      lastName: 'Papa',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
