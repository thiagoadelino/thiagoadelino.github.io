import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BingoGeneratorModule } from './bingo-generator/bingo-generator.module';
import { BingoGeneratorComponent } from './bingo-generator/bingo-generator/bingo-generator.component';
import { BingoGeneratorService } from './bingo-generator/service/bingo-generator.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BingoCardComponent } from './bingo-generator/bingo-card/bingo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoGeneratorComponent,
    BingoCardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //BingoGeneratorModule
  ],
  providers: [BingoGeneratorService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
