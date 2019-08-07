import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
 // pathVariableName="Nitish"
  dob =''
  welcomeMessageFromService:String
  errorMessage:String

  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {

    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage() {
    //console.log("welcome In MyToDO App")
    console.log(this.welcomeDataService.executeHelloWorldService());
    this.welcomeDataService.executeHelloWorldService().subscribe(

      response => this.handleSuccessfullResponse(response),
       error =>this.handleErrorResponse(error));
  }
  getWelcomeMessageWithPathVariable()
  {
    this.welcomeDataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfullResponse(response),
      error=>this.handleErrorResponse(error)

    );
  }

  handleSuccessfullResponse(response) {
    //console.log(response)
    //console.log(response.message)
    this.welcomeMessageFromService=response.message
  }
  handleErrorResponse(error)
  {
   this.welcomeMessageFromService=error.error.message 
  }

}
