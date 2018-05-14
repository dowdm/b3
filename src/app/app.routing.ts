import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';




const appRoutes: Routes = [

  {
    path: '',
    component: CurrencyComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
