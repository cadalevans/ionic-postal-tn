import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MapsComponent } from './maps/maps.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { ConsultBalanceComponent } from './consult-balance/consult-balance.component';
import { ConsultHistoryComponent } from './consult-history/consult-history.component';
import { NewsComponent } from './news/news.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'maps',component:MapsComponent
  },
  {
    path:'credit',component:CreditCardComponent
  },
  {
    path:'debit',component:DebitCardComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'balance',component:ConsultBalanceComponent
  },
  {
    path:'history',component:ConsultHistoryComponent
  },
  {
    path:'partner',component:PartnerComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'forgot' , component:ForgotPasswordComponent
  }



];


@NgModule({
  imports: [ FormsModule,CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
