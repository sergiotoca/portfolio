import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
      { path: 'pages', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ]
  },
  { path: 'notfound', loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) },
  { path: '**', redirectTo: '/notfound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled', // This enables returning to the top on navigation
    anchorScrolling: 'disabled', // This enables fragment navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
