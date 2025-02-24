import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet]
})
export class AppComponent {
  constructor(private router: Router) {
    this.navigateToHome();
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
