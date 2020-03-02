import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumbersComponent } from './numbers/numbers.component';
import { SymbolsComponent } from './symbols/symbols.component';
import { AboutComponent } from './about/about.component';
import { ReadingsComponent } from './readings/readings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumbersComponent,
    SymbolsComponent,
    AboutComponent,
    ReadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		NgbModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
