import { UserSidebarComponent } from './user/user-sidebar.component';
import { UserDetailsComponent } from './user/user-details.component';
import { PhotosSidebarComponent } from './photos/photos-sidebar.component';
import { PhotosDetailsComponent } from './photos/photos-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    PhotosDetailsComponent,
    PhotosSidebarComponent,
    UserDetailsComponent,
    UserSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
