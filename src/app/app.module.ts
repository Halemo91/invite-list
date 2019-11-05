import { AppHeaderComponent } from './ui/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InviteListComponent } from './invite-list/invite-list.component';
import { InviteComponent } from './invite/invite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule, MatSidenavModule, MatTableModule, MatIconModule, MatToolbarModule,
   MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InviteComponent,
    InviteListComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
