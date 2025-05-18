import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() {
  }
  onResumeClick(event: Event): void {
    event.preventDefault();
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const countryCode = data.country;
        if (countryCode === 'AE') {
          window.open('https://ismail-profile.netlify.app/resumedubai', '_blank');
        } else {
          window.open('https://ismail-profile.netlify.app/resume', '_blank');
        }
      })
      .catch(() => {
        window.open('https://ismail-profile.netlify.app/resume', '_blank');
      });
  }
}

