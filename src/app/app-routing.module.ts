import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './Components/comp1/comp1.component';
import { Comp2Component } from './Components/comp2/comp2.component';
import { Comp3Component } from './Components/comp3/comp3.component';
import { Comp4Component } from './Components/comp4/comp4.component';
import { Comp5Component } from './Components/comp5/comp5.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Comp1Component,
  },
  {
    path: 'comp2',
    component: Comp2Component,
  },
  {
    path: 'comp3',
    component: Comp3Component,
  },
  {
    path: 'comp4',
    component: Comp4Component,
  },
  {
    path: 'comp5',
    component: Comp5Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
