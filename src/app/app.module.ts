import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { InfoComponent } from './components/survey/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/survey/questions/questions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HomeComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
