import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vision',
  imports: [],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  isMenuOpen: any;

  closeMenu() {
    this.isMenuOpen = false; // Close menu when a link is clicked
  }
  constructor(private router: Router) {} 

  viewShowcase() {
    // Navigate to the Insights component
    this.router.navigate(['/showcase']);
  }

}
