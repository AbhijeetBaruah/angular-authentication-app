import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuardService,AdminAuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LoginComponent},
  {path:'no-access',component:NoAccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
