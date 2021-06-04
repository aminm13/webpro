import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { EcuPackagesComponent } from './pages/ecu-packages/ecu-packages.component';
import { SelectPackComponent } from './pages/select-pack/select-pack.component';
import { AvailablePacksComponent } from './pages/available-packs/available-packs.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'selectPackage', component: EcuPackagesComponent },
  { path: 'signup', component: SelectPackComponent },
  {path:'availablePacks',component: AvailablePacksComponent},
  { path: 'chat', component: ChatComponent },
  {path: 'profile',component:ProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
