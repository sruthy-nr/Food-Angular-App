import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name=""
  ad=""
  ph=""
  email=""
  pswd=""
  cpswd=""
  register=()=>
  {
    let data:any={"name":this.name,"ad":this.ad,"ph":this.ph,"email":this.email,"pswd":this.pswd,"cpswd":this.cpswd}
    console.log(data)
  }
}
