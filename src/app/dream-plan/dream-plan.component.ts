import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DreamDataService } from '../dream-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dream-plan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dream-plan.component.html',
  styleUrls: ['./dream-plan.component.scss']
})
export class DreamPlanComponent {
  dreamData: any;
  suggestion: string = 'Fetching personalized advice...';
  monthlySavings: number = 0;
  actionStep: string = 'Loading...';
  emotionAdvice: string = 'Loading...';
  academyTip: string = 'Loading...';
  communityMessage: string = 'Loading...';

  private dreamService = inject(DreamDataService);
  private http = inject(HttpClient);

  constructor() {
    this.dreamData = this.dreamService.getDreamData();

    if (!this.dreamData) {
      const savedData = localStorage.getItem('dreamFormData');
      if (savedData) {
        this.dreamData = JSON.parse(savedData);
      }
    }

    if (this.dreamData) {
      this.fetchDreamPlanWithAI();
    }
  }

  fetchDreamPlanWithAI(): void {
  const prompt = `
You are a smart AI assistant. A user has shared:
- Name: ${this.dreamData.name}
- Age: ${this.dreamData.age}
- Dream: ${this.dreamData.dream}
- Timeline (in years): ${this.dreamData.timeline}
- Emotional Status: ${this.dreamData.status}
- Support System: ${Object.entries(this.dreamData.support).filter(([k, v]) => v).map(([k]) => k).join(', ')}

Based on this:
1. Estimate a realistic total cost (in INR ₹) for this dream.
2. Calculate monthly savings needed based on the timeline.
3. Suggest one smart action step they should take immediately.
4. Give an emotional advice or small tip based on their current mood.
5. Suggest a learning resource (e.g., "Watch a 5-min video on goal setting") for their dream.
6. Suggest a community type (e.g., "Join Car Enthusiasts Group" or "Startup Founders Forum").

Reply format strictly:
{ 
  "estimatedCost": number,
  "monthlySavings": number,
  "actionStep": "string",
  "emotionAdvice": "string",
  "academyTip": "string",
  "communityMessage": "string",
  "motivationalSuggestion": "string"
}
  `.trim();

  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  const body = {
    contents: [
      { parts: [{ text: prompt }] }
    ]
  };

  const geminiApiKey = 'AIzaSyA58XVmfSQ_ouB2MsrBTIv2l8azS2R8wlg';
  const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

  this.http.post<any>(geminiEndpoint, body, { headers }).subscribe({
    next: (res) => {
      try {
        if (res && res.candidates && res.candidates.length > 0) {
          let textResponse = res.candidates[0].content.parts[0].text.trim();

          // 🛠️ Remove ```json and ``` if present
          textResponse = textResponse.replace(/```(?:json)?\n?|```/g, '').trim();

          const parsed = JSON.parse(textResponse);

          this.monthlySavings = parsed.monthlySavings;
          this.actionStep = parsed.actionStep;
          this.emotionAdvice = parsed.emotionAdvice;
          this.academyTip = parsed.academyTip;
          this.communityMessage = parsed.communityMessage;
          this.suggestion = parsed.motivationalSuggestion;
        } else {
          this.handleError();
        }
      } catch (error) {
        console.error('Parsing Error:', error);
        this.handleError();
      }
    },
    error: (err) => {
      console.error('Error fetching Dream Plan AI:', err);
      this.handleError();
    }
  });
}
  handleError() {
    throw new Error('Method not implemented.');
  }
  downloadDataAsFile(data: string, filename: string) {
  const blob = new Blob([data], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
}

  downloadPlan(): void {
  const name = this.dreamData?.name || 'user';
  const content = `
Dream Roadmap for ${name}

🌟 Dream: ${this.dreamData?.dream}
🕒 Timeline: ${this.dreamData?.timeline} years
💰 Monthly Savings Needed: ₹${this.monthlySavings}
🚀 Action Step: ${this.actionStep}

🧠 Emotional Advice:
${this.emotionAdvice}

📚 Academy Tip:
${this.academyTip}

🤝 Community Message:
${this.communityMessage}

🤖 Motivational Suggestion:
${this.suggestion}
`.trim();

  this.downloadDataAsFile(content, `${name}_Dream_Plan.txt`);
}


}
