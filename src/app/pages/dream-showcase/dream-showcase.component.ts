import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-dream-showcase',
  imports: [],
  templateUrl: './dream-showcase.component.html',
  styleUrl: './dream-showcase.component.scss'
})
export class DreamShowcaseComponent {
isMenuOpen: any;

  closeMenu() {
    this.isMenuOpen = false; // Close menu when a link is clicked
  }
  constructor(private router: Router) {} 
  viewDreamForm() {
    // Navigate to the Insights component
    this.router.navigate(['/dream-form']);
  }

}

