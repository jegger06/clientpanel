import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module Imports
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// Router Import
import { RouterModule, Routes } from '@angular/router';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Service Imports
import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyDwtK9gzwrsS918-HJ8I1vmxxxk9qqVJfY",
  authDomain: "clientpanel-8d4ff.firebaseapp.com",
  databaseURL: "https://clientpanel-8d4ff.firebaseio.com",
  storageBucket: "clientpanel-8d4ff.appspot.com",
  messagingSenderId: "1022937819760"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
