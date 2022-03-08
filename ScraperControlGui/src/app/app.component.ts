import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ScraperControlGui';

  constructor(private router: Router) {}
  onNavHeader() {
    this.router.navigate(['']);
  }
}
