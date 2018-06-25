import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep.service';
import { HttpModule } from '@angular/http';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    DesenvolvedoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [
    CepService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
