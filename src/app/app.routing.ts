import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepComponent } from './cep/cep.component';
import { LoginComponent } from './login/login.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'desenvolvedores', component: DesenvolvedoresComponent },
  { path: '', component: CepComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
