import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { QuestionsComponent } from './views/questions/questions.component';
import { WordsService } from './services/words.service';
import { RankComponent } from './views/rank/rank.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({ timeOut: 500}),
  ],
  providers: [
    WordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
