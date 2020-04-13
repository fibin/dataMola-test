import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { SeriesTableComponent } from './pages/series-table/series-table.component';
import { MaterialModule } from './components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../app/components/search/search.component'
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '../app/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent,
    SeriesTableComponent,
    SearchComponent,
    DropdownComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
