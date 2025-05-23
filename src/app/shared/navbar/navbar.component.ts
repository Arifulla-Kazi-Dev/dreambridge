import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-navbar',
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 
 isMenuOpen = false;
closeMenu() {
  this.isMenuOpen = false; // Close menu when a link is clicked
}
constructor(private router: Router) {} // Inject Router

viewLand() {
  // Navigate to the Insights component
  this.router.navigate(['/']);
}
viewHome() {
  // Navigate to the Insights component
  this.router.navigate(['/home']);
}
viewDreamForm() {
  // Navigate to the Insights component
  this.router.navigate(['/dream-form']);
}
viewVision() {
  // Navigate to the Insights component
  this.router.navigate(['/vision']);
}

viewContact() {
  // Navigate to the Insights component
  this.router.navigate(['/contact']);
}

}
