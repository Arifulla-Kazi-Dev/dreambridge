import { Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DreamDataService } from './../../dream-data.service';

@Component({
  selector: 'app-academy-tip',
  imports: [],
  templateUrl: './academy-tip.component.html',
  styleUrl: './academy-tip.component.scss'
})
export class AcademicTipComponent {
  tip: string = 'Generating academic tip based on your dream...';
  videoUrl = 'https://www.youtube.com/embed/H14bBuluwB8'; // Study motivation video

  private dreamService = inject(DreamDataService);
  private http = inject(HttpClient);

  dreamData: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.dreamData = this.dreamService.getDreamData();

    // ✅ Fix: Only access localStorage if we're in the browser
    if (!this.dreamData && isPlatformBrowser(this.platformId)) {
      const savedData = localStorage.getItem('dreamFormData');
      if (savedData) {
        this.dreamData = JSON.parse(savedData);
      }
    }

    if (this.dreamData) {
      this.fetchAcademicTipWithAI();
    }
  }

  fetchAcademicTipWithAI(): void {
    const prompt = `
User Details:
- Name: ${this.dreamData.name}
- Age: ${this.dreamData.age}
- Dream: ${this.dreamData.dream}
- Timeline: ${this.dreamData.timeline} years
- Status: ${this.dreamData.status}
- Support System: ${Object.entries(this.dreamData.support).filter(([k, v]) => v).map(([k]) => k).join(', ')}

Based on this dream and timeline, suggest one personalized **academic learning tip or resource** to help the user move closer to their dream. Keep it practical, clear, and encouraging.
`.trim();

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    const apiKey = 'AIzaSyD08sS00PNXbezG_HW_gmeY2Xik3lVrhRI'; // Replace with real API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    this.http.post<any>(url, body, { headers }).subscribe({
      next: (res) => {
        const text = res?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        this.tip = text || 'No academic tip received.';
      },
      error: () => {
        this.tip = 'Failed to fetch academic tip.';
      }
    });
  }
}
