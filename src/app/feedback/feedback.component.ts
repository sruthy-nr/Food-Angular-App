import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  fb=""
  feedback=()=>
  {
    let f:any={"fb":this.fb}
    console.log(f)
  }
}
