import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/homeComponents/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { ViewPersonsComponent } from './components/homeComponents/view-persons/view-persons.component';
import { EditPersonComponent } from './components/homeComponents/edit-person/edit-person.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AddPersonComponent } from './components/homeComponents/add-person/add-person.component';


@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ViewPersonsComponent,
        EditPersonComponent,
        AddPersonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        MatDialogModule
    ]
})
export class AppModule { }
