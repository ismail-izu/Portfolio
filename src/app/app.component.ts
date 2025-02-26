import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent, FooterComponent, HomeComponent, SkillsComponent, AboutComponent, ContactComponent]
})
export class AppComponent {
  constructor(private router: Router) {
    this.navigateToHome();
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
