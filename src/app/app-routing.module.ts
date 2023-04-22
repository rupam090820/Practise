import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PnfComponent } from './pnf/pnf.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'profile/:id',component:ProfileComponent},
{path:'login',component:LoginComponent},

{path:'about',component:AboutComponent},
{path:'profile',component:ProfileComponent},
{path:'**',component:PnfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
