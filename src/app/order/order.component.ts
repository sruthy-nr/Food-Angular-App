import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cat=""
  item=""
  qty=""
  order=()=>
  {
    let data:any={"cat":this.cat,"item":this.item,"qty":this.qty}
    console.log(data)
}
}
