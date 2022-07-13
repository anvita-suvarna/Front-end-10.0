import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxPrintModule } from 'ngx-print';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { TriphistoryComponent } from './triphistory/triphistory.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShowfeedbacksComponent } from './showfeedbacks/showfeedbacks.component';
import { AddbusComponent } from './addbus/addbus.component';
import { UpdatebusComponent } from './updatebus/updatebus.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { AdminBusComponent } from './admin-bus/admin-bus.component';
import { PaymentComponent } from './payment/payment.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';
import { WelcomeadminComponent } from './welcomeadmin/welcomeadmin.component';
import { UnauthorizedBookingComponent } from './unauthorized-booking/unauthorized-booking.component';
import { UnauthorizeduserPaymentComponent } from './unauthorizeduser-payment/unauthorizeduser-payment.component';
import { CancelUnauthorizedBookingComponent } from './cancel-unauthorized-booking/cancel-unauthorized-booking.component';
import { BooknewticketComponent } from './booknewticket/booknewticket.component';
import { UanuthorizeSeatSelectionComponent } from './uanuthorize-seat-selection/uanuthorize-seat-selection.component';
import { UnauthorizeTicketComponent } from './unauthorize-ticket/unauthorize-ticket.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PaymentapprovedComponent } from './paymentapproved/paymentapproved.component';
import { ShowunauthorizedbookingsComponent } from './showunauthorizedbookings/showunauthorizedbookings.component';
import { InactivecustomersComponent } from './inactivecustomers/inactivecustomers.component';
import { ProfitsComponent } from './profits/profits.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminLoginComponent,
    HomeComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    BookingComponent,
    TriphistoryComponent,
    MyprofileComponent,
    ShowbusesComponent,
    ShowusersComponent,
    ShowbookingsComponent,
    FeedbackComponent,
    ShowfeedbacksComponent,
    AddbusComponent,
    UpdatebusComponent,
    UpdateprofileComponent,
    AdminBusComponent,
    PaymentComponent,
    CancelbookingComponent,
    PaymentDoneComponent,
    WelcomeadminComponent,
    UnauthorizedBookingComponent,
    UnauthorizeduserPaymentComponent,
    CancelUnauthorizedBookingComponent,
    BooknewticketComponent,
    UanuthorizeSeatSelectionComponent,
    UnauthorizeTicketComponent,
    PrivacyComponent,
    TermsComponent,
    PaymentapprovedComponent,
    ShowunauthorizedbookingsComponent,
    InactivecustomersComponent,
    ProfitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
