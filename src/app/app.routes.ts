import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DreamFormComponent } from './pages/dream-form/dream-form.component';
import { HomeComponent } from './pages/home/home.component';
import { VisionComponent } from './pages/vision/vision.component';
import { NgModule } from '@angular/core';
import { DreamShowcaseComponent } from './pages/dream-showcase/dream-showcase.component';
import { DreamPlanComponent } from './dream-plan/dream-plan.component';
import { AcademicTipComponent } from './pages/academy-tip/academy-tip.component';
import { CommunityComponent } from './pages/community-support/community-support.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vision', component: VisionComponent },
    { path: 'dream-form', component: DreamFormComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'showcase', component: DreamShowcaseComponent },
    { path: 'academy', component: AcademicTipComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'dream-plan', component: DreamPlanComponent },

  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}  