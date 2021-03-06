import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScrapeTaskComponent } from './pages/add-scrape-task/add-scrape-task.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addscrapetask', component: AddScrapeTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
