import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uname=""
  pswd=""
  login=()=>
  {
    let data:any={"uname":this.uname,"pswd":this.pswd}
    console.log(data)
    if(this.uname=="user" && this.pswd=="user")
    {
      alert("Logged in")
    }
    else{
      alert("Invalid credentials")
    }
  }

}
