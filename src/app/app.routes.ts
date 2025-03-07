import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];
