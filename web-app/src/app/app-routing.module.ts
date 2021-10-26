import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component';
import { SocialsComponent } from './socials/socials.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'social', component: SocialsComponent},
  { path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
