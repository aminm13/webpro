import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { Calendar } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { PackageComponent } from './dashboards/common/package/package.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TutorFilterComponent } from './dashboards/common/tutor-filter/tutor-filter.component';
import { AssignStudentComponent } from './dashboards/common/assign-student/assign-student.component';
import { QualificationComponent } from './dashboards/common/qualification/qualification.component';
import { TutorReviewsComponent } from './dashboards/common/tutor-reviews/tutor-reviews.component';
import { StudentCourseComponent } from './dashboards/common/student-course/student-course.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    Calendar,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Profile1Component,
    HelpComponent,
    PackageComponent,
    TutorFilterComponent,
    AssignStudentComponent,
    QualificationComponent,
    TutorReviewsComponent,
    StudentCourseComponent,

  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    Calendar,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
