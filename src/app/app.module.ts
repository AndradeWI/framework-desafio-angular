import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MenuModule } from './core/components/menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AlbumsComponent } from './modules/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MenuModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
