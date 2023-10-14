import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookTableComponent } from './book-table/book-table.component';
import { HeaderComponent } from './header/header.component';
import { BookModalComponent } from './book-modal/book-modal.component';

// TODO: Alphabitize 

@NgModule({
  declarations: [
    AppComponent,
    BookTableComponent,
    HeaderComponent,
    BookModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }