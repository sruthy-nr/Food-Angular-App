import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"order",
    component:OrderComponent
  },
  {
    path:"payment",
    component:PaymentComponent
  },
  {
    path:"feedback",
    component:FeedbackComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ViewComponent,
    OrderComponent,
    PaymentComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
