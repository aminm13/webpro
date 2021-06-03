import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from '../chat/chat.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatBodyComponent } from './components/chat-body/chat-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { PackageComponent } from './components/package/package.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components/calendar/calendar.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { TutorFilterComponent } from './components/tutor-filter/tutor-filter.component';


@NgModule({
  declarations: [
    LoginComponent,
    ChatComponent,
    UserListComponent,
    ChatBodyComponent,
    ProfileComponent,
    PackageComponent,
    CalendarComponent,
    QualificationComponent,
    TutorFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
    
  ]
})
export class PageModule { }
