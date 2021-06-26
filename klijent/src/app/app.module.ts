import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongComponent } from './components/song/song.component';
import { NewSongComponent } from './components/new-song/new-song.component';
import { ErrorPageComponent } from './error/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongComponent,
    NewSongComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
