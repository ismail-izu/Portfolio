import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavBarComponent,RouterOutlet]
})
export class AppComponent {
  constructor(private router: Router) {
    this.navigateToHome();
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
