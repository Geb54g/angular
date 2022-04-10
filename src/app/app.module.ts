import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
=======
import { QuotesComponent } from './quotes/quotes.component';
>>>>>>> ffd29a6b39715cd689006630789cc84a80e792a0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    HeaderComponent,
    QuotesComponent
>>>>>>> ffd29a6b39715cd689006630789cc84a80e792a0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
