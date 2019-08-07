import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'nitish@rage'
  password = 'rage123'
  invalidLogin = false
  errorMessage = 'Invalid Credential'
  constructor(private router :Router,private hardcodedAuthenticationService:HardcodedAuthenticationService){
 
  }
  
  handleLogin() {
    
    if (this.hardcodedAuthenticationService.authenticate(this.username,this.password)) {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true

    }
    

    
  }

  ngOnInit() {
  }

}
