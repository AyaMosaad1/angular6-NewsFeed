import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NavComponent } from './navbar/nav/nav/nav.component';
import { LeftsideComponent } from './navbar/leftside/leftside.component';
import { RightsideComponent } from './navbar/rightside/rightside.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    NavComponent,
    LeftsideComponent,
    RightsideComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
