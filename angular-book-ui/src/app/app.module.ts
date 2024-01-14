import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTableComponent } from './book-table/book-table.component';
import { HeaderComponent } from './header/header.component';
import { BookModalComponent } from './book-modal/book-modal.component';
// import { OpenCloseComponent } from './open-close/open-close.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookModalComponent,
    BookTableComponent,
    HeaderComponent,
    // OpenCloseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterLink, 

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }