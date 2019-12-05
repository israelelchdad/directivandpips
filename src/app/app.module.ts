import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipsimComponent } from './comps/pipsim/pipsim.component';
import { OnePipe } from './pipsim/one.pipe';
import { TowPipe } from './pipsim/tow.pipe';
import { ThreePipe } from './pipsim/three.pipe';
import { ForPipe } from './pipsim/for.pipe';
import { FivePipe } from './pipsim/five.pipe';
import { SixPipe } from './pipsim/six.pipe';
import { SevenPipe } from './pipsim/seven.pipe';
import { EheigtPipe } from './pipsim/eheigt.pipe';
import { NinePipe } from './pipsim/nine.pipe';
import { TenPipe } from './pipsim/ten.pipe';
import { ElevenPipe } from './pipsim/eleven.pipe';
import { TwelvePipe } from './pipsim/twelve.pipe';
import { Dir1Directive } from './dirctivs/dir1.directive';
import { DirctivsComponent } from './comps/dirctivs/dirctivs.component';
import { Dir2Directive } from './dirctivs/dir2.directive';
import { Dir3Directive } from './dirctivs/dir3.directive';
import { Dir4Directive } from './dirctivs/dir4.directive';
import { Dir5Directive } from './dirctivs/dir5.directive';
import { Dir6Directive } from './dirctivs/dir6.directive';
import { Dir7Directive } from './dirctivs/dir7.directive';
import { Dir8Directive } from './dirctivs/dir8.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipsimComponent,
    OnePipe,
    TowPipe,
    ThreePipe,
    ForPipe,
    FivePipe,
    SixPipe,
    SevenPipe,
    EheigtPipe,
    NinePipe,
    TenPipe,
    ElevenPipe,
    TwelvePipe,
    Dir1Directive,
    DirctivsComponent,
    Dir2Directive,
    Dir3Directive,
    Dir4Directive,
    Dir5Directive,
    Dir6Directive,
    Dir7Directive,
    Dir8Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
