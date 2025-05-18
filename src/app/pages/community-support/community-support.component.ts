import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DreamDataService } from './../../dream-data.service';

@Component({
  selector: 'app-community-support',
  standalone: true,
  imports: [],
  templateUrl: './community-support.component.html',
  styleUrls: ['./community-support.component.scss']
})
export class CommunityComponent {
  communityTip: string = 'Finding the right community for your dream...';
  videoUrl = 'https://www.youtube.com/embed/LZgQws8Dnt4'; // Motivation video for community support

  private dreamService = inject(DreamDataService);
  private http = inject(HttpClient);

  dreamData: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.dreamData = this.dreamService.getDreamData();

    // ✅ Safe localStorage access
    if (!this.dreamData && isPlatformBrowser(this.platformId)) {
      const savedData = localStorage.getItem('dreamFormData');
      if (savedData) {
        this.dreamData = JSON.parse(savedData);
      }
    }

    if (this.dreamData) {
      this.fetchCommunitySupportTip();
    }
  }

  fetchCommunitySupportTip(): void {
    const prompt = `
User Details:
- Name: ${this.dreamData.name}
- Dream: ${this.dreamData.dream}
- Timeline: ${this.dreamData.timeline} years
- Support System: ${Object.entries(this.dreamData.support).filter(([k, v]) => v).map(([k]) => k).join(', ')}

Based on this dream alone (ignore financial status or other conditions), suggest one or more real-world **online or offline communities, websites, forums, or platforms** that can help them move forward.

Provide **direct links** if available. Make the suggestions friendly, practical, and accessible to beginners.
`.trim();

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    const apiKey = 'AIzaSyAgfjNQbaDjr5D0l1WNOPu4mK9mmVaxUEQ'; // Use your actual key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    this.http.post<any>(url, body, { headers }).subscribe({
      next: (res) => {
        const text = res?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        this.communityTip = text || 'No community recommendation received.';
      },
      error: () => {
        this.communityTip = 'Failed to fetch community recommendation.';
      }
    });
  }
}
