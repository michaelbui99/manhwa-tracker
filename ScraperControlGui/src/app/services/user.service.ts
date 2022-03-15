import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //TODO: Currently defaults to true for debugging. Change this to false
  private _isLoggedIn: boolean = true;

  constructor() {}

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  setIsLoggedIn(bool: boolean) {
    this._isLoggedIn = bool;
  }
}
