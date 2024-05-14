import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MapsComponent } from './maps/maps.component';
import { ConsultBalanceComponent } from './consult-balance/consult-balance.component';
import { ConsultHistoryComponent } from './consult-history/consult-history.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { NewsComponent } from './news/news.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,RegistrationComponent,ForgotPasswordComponent,MenuComponent,MapsComponent,ConsultBalanceComponent,ContactComponent, ConsultHistoryComponent,DebitCardComponent,CreditCardComponent,NewsComponent,PartnerComponent,AboutComponent],
  imports: [ CommonModule,
    FormsModule,BrowserModule,
    IonicModule,AppRoutingModule,IonicModule.forRoot()],
  providers: [NgModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
