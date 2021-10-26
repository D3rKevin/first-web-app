import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component';
import { SocialsComponent } from './socials/socials.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'tokyo', component: MainComponent},
  { path: 'social', component: SocialsComponent},
  { path: '', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
