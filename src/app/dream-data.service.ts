import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DreamDataService {
  private dreamData: any = null;

  setDreamData(data: any) {
    this.dreamData = data;
  }

  getDreamData() {
    return this.dreamData;
  }

  clearDreamData() {
    this.dreamData = null;
  }
}
