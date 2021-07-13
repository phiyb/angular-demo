import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create', component: CreateEmployeeComponent},
  // {path: 'update/:id', component: UpdateEmployeeComponent},
  // {path: 'details/:id', component: EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
