import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isNull, nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';let TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

constructor(private router : Router ) { }

public setToken(token: string): void {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string {
   localStorage.getItem(TOKEN_KEY);
  return TOKEN_KEY;
}

public isLogged():boolean{
  if(!this.getToken()){
    return false;
}return false;
}

public logOut(): void {
  window.localStorage.clear();
  this.router.navigate(['/']);
}
}
