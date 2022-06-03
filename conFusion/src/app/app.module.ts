import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import 'hammerjs';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';


import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
