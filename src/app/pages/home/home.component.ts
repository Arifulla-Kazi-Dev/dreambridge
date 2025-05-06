import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isMenuOpen: any;

  closeMenu() {
    this.isMenuOpen = false; // Close menu when a link is clicked
  }
  constructor(private router: Router) {} 

  viewDreamForm() {
    // Navigate to the Insights component
    this.router.navigate(['/dream-form']);
  }
  viewVision() {
    // Navigate to the Insights component
    this.router.navigate(['/vision']);
  }

}
