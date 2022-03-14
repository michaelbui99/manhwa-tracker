import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _isLoggedIn: boolean = false;

  constructor() {}

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  setIsLoggedIn(bool: boolean) {
    this._isLoggedIn = bool;
  }
}
