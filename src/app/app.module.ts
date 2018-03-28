import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
  HttpModule,
  FormsModule,
    BrowserModule,
	RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
		 {
            path: 'login/register',
            component: RegistrationComponent
         },
		 {
            path: 'dashboard/:id/:name',
            component: DashboardComponent
         },
		 {
            path: 'dashboard',
            component: DashboardComponent
         },
		 {
            path: 'Logout',
            component: LoginComponent
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
