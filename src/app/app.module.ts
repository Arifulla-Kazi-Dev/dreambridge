import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
     // Import standalone components here
  ],
  providers: []
})
export class AppModule {}
