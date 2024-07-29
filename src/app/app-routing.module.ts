import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FianceComponent } from './fiance/fiance.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MoreserviceComponent } from './moreservice/moreservice.component';

const routes: Routes = [
  {
    path:'fiance',
    component:FianceComponent
  },
  {
  path: 'analytics',
  component:AnalyticsComponent
  },
  {
    path: 'moreservice',
    component:MoreserviceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
