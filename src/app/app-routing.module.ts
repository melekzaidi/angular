import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
//le fichier de routage princiale
const routes: Routes = [
  // declarer toutes les routes 
  // et faire la correspondance entre path et compo
  
  {
    path:'edit/:id',//id est dynammique
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'dashboard',
    pathMatch:'full',// matching complet
    component:DashboardComponent
  },
  {
    path:'tools',
    pathMatch:'full',// matching complet
    component:ToolsComponent
  },
  {
    path:'events',
    pathMatch:'full',// matching complet
    component:EventsComponent
  },
  {
    path:'articles',
    pathMatch:'full',// matching complet
    component:EventsComponent
  },
  {
    path:'create',
    pathMatch:'full',// matching complet
    component:MemberFormComponent
  },
  {path:'member',
    component:MemberComponent},
    {path:'dashboard',
      component:DashboardComponent},
  {
    path:'',
    pathMatch:'full',
redirectTo:'login'  },

  {
    path:'**',
    component:LoginComponent
  }
  ,
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }