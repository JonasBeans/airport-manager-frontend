import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PilotDetailComponent } from './pilot-detail/pilot-detail.component';
import { PilotComponent } from './pilot/pilot.component';

const routes: Routes = [
    {path: 'pilot/detail/:id', component: PilotDetailComponent},
    {path: 'pilots', component: PilotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
