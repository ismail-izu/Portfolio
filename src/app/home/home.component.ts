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
        const url = response.country === 'AE'
          ? 'https://ismail-profile.netlify.app/resumedubai'
          : 'https://ismail-profile.netlify.app/resume';

        const newWindow = window.open(url, '_blank');

        if (!newWindow || newWindow.closed) {
          window.location.href = url;
        }
      },
      error: () => {
        const fallbackUrl = 'https://ismail-profile.netlify.app/resume';
        const newWindow = window.open(fallbackUrl, '_blank');

        if (!newWindow || newWindow.closed) {
          window.location.href = fallbackUrl;
        }
      }
    });
  }
}

