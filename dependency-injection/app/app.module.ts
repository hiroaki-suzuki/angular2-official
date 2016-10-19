import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { Logger } from './logger.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent
  ],
  providers: [
    Logger
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
