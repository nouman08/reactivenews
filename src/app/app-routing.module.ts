import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponentComponent } from './news-component/news-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';

const routes: Routes = [
  {
      path: 'news',
      component: NewsComponentComponent
  },
  {
      path: 'details',
      component: DetailsComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
