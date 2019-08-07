import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password)
  {
    //console.log('before calling' +this.isUserLoggedIn())
    if(username==='nitish@rageframework' && password==='rage123')
    {
      sessionStorage.setItem('authenticaterUser',username);
      //console.log('After  calling' +this.isUserLoggedIn())
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn()
  {
     let user=sessionStorage.getItem('authenticaterUser');
     return !(user===null)

  }
  logout()
  {
    sessionStorage.removeItem('authenticaterUser');
  }
}
