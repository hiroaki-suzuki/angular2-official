import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import  { ClickMeComponent } from './click-me.component';
import  { KeyUpComponent_v1 } from './keyup.v1.components';
import { LoopbackComponent } from './loop-back.component';
import { KeyUpComponent_v2 } from './keyup.v2.components';
import { KeyUpComponent_v3 } from './keyup.v3.components';
import { KeyUpComponent_v4 } from './keyup.v4.components';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyUpComponent_v1,
    LoopbackComponent,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
