import { Component } from '@angular/core';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private geolocationService: GeolocationService) {
  }
  onResumeClick(event: Event): void {
    event.preventDefault();
    this.geolocationService.getCountryDetails().subscribe({
      next: (response) => {
        if (response.country === 'AE') {
          window.open('https://ismail-profile.netlify.app/resumedubai', '_blank');
        } else {
          window.open('https://ismail-profile.netlify.app/resume', '_blank');
        }
      },
      error: () => {
        window.open('https://ismail-profile.netlify.app/resume', '_blank');
      }
    });

  }
}

