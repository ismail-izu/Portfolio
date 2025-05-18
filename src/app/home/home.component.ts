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
        if (response.country === 'AE') { // UAE
          window.open('https://ismail-profile.netlify.app/resumedubai', '_blank');
        } else { // Default (India)
          window.open('https://ismail-profile.netlify.app/resume', '_blank');
        }
      },
      error: () => {
        // Fallback to Indian resume if detection fails
        window.open('https://ismail-profile.netlify.app/resume', '_blank');
      }
    });


    // fetch('https://ipapi.co/json/')
    //   .then(res => res.json())
    //   .then(data => {
    //     const countryCode = data.country;
    //     if (countryCode === 'AE') {
    //       window.open('https://ismail-profile.netlify.app/resumedubai', '_blank');
    //     } else {
    //       window.open('https://ismail-profile.netlify.app/resume', '_blank');
    //     }
    //   })
    //   .catch(() => {
    //     window.open('https://ismail-profile.netlify.app/resume', '_blank');
    //   });
  }
}

