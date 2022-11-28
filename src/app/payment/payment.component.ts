import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  cname=""
  cnum=""
  val=""
  cvv=""
  da=""
  pay=()=>
  {
    let data:any={"cname":this.cname,"cnum":this.cnum,"val":this.val,"cvv":this.cvv,"da":this.da}
    console.log(data)
  }
}
