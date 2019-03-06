import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from './components/posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    // Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
