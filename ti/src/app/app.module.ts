import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { ErrorModule } from './views/errors/error.module';

import { Calendar } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';

import { HttpClientModule } from '@angular/common/http';

// main layout
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { LoginComponent } from './login/login.component';
import { Profile2Component } from './views/profile/profile2/profile2.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'dashboards', children:
      [
        { path: 'v1', component: Dashboard1Component },
      ]
  },
  {
    path: 'profiles', children:
      [
        { path: 'profile1', component: Profile1Component },
        { path: 'profile2', component: Profile2Component },

      ]
  },
  {
    path: 'tables', children:
      [
        { path: 'table1', component: BasicTableComponent },
      ]
  },
  {
    path: 'maps', children:
      [
        { path: 'map1', component: Calendar },
      ]
  },

  { path: 'modals', component: ModalsComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,

  ],
  imports: [
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),

    BrowserModule,
    BrowserAnimationsModule,
    NavigationModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    SharedModule,
    ViewsModule,
    ErrorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
