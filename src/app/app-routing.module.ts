import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/guards';
import { ContactComponent } from './shared/contact/contact.component';
import { GetQuoteComponent } from './shared/get-quote/get-quote.component';
import { ServicesComponent } from './shared/services/services.component';
import { ShopComponent } from './shared/shop/shop.component';
import { WorkComponent } from './shared/work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'get-quote',
    component: GetQuoteComponent

  },
  {
    path: 'contact',
    component: ContactComponent

  },
  {
    path: 'work',
    component: WorkComponent

  },
  {
    path: 'services',
    component: ServicesComponent

  },
  {
    path: 'shop',
    component: ShopComponent

  },


  {
    path: 'secured-feat',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/secured-feat/secured-feat.module').then(
        m => m.SecuredFeatModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
