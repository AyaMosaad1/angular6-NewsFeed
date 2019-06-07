import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent} from './posts/create-post/create-post.component';
import {  ViewPostComponent } from './posts/view-post/view-post.component';
import { NavComponent } from './navbar/nav/nav/nav.component';
import { LeftsideComponent } from './navbar/leftside/leftside.component';
import { RightsideComponent } from './navbar/rightside/rightside.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ViewPostComponent,
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
