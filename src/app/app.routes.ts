import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglepopupComponent }      from './singlepopup/singlepopup.component';
import { MultiplepopupComponent } from './multiplepopup/multiplepopup.component';


const appRoutes: Routes = [
     
    {
      path: 'singlepopup',
      component: SinglepopupComponent
     },
     {

       path: 'multiplepopup',
       component: MultiplepopupComponent,
     },
    {
      path: '**', 
      component: MultiplepopupComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);