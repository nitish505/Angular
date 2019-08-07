import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean
{
  constructor(public message:String)
  {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldService()
  {
    
    return this.http.get<HelloWorldBean>('http://localhost:8443/hello-world-bean');
    //console.log("Hi This is HelloWorldService")
  }
  executeHelloWorldServiceWithPathVariable(name)
  {

    return this.http.get<HelloWorldBean>(`http://localhost:8443/hello-world-bean/path-variable/${name}`);

  }
}
 