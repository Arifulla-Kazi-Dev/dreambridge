import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DreamDataService } from './../../dream-data.service'; // import service

@Component({
  selector: 'app-dream-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dream-form.component.html',
  styleUrl: './dream-form.component.scss'
})
export class DreamFormComponent {

  constructor(private router: Router, private dreamService: DreamDataService) {}

  formData = {
    name: '',
    age: null,
    email: '',
    dream: '',
    timeline: '',
    status: '',
    support: {
      financial: false,
      mental: false,
      mentor: false
    }
  };

  onSubmit(form: any): void {
    if (form.valid) {
      // Save to service
      this.dreamService.setDreamData(this.formData);
  
      // ✅ Save to localStorage as JSON
      localStorage.setItem('dreamFormData', JSON.stringify(this.formData));
  
      // Navigate
      this.router.navigate(['/dream-plan']);
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
  
}
