import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QuestionsComponent } from './views/questions/questions.component';
import { RankComponent } from './views/rank/rank.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'rank',component:RankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
