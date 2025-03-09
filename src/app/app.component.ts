import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
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
export class AppComponent implements AfterViewInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  ngAfterViewInit() {
    this.activatedRoute.fragment.subscribe(fragment => {
      this.scrollToFragment(fragment);
    });
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.hasAttribute('routerLink')) {
      const fragment = target.getAttribute('fragment');
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    }

  }

  scrollToFragment(fragment: string | null) {
    if (fragment) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
