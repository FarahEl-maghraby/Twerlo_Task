import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/app/interfaces/questionInterface';
import { WordsService } from 'src/app/services/words.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  // Intalize variables
  userName: string = '';
  questions: Questions[] = [];
  startIndex: number = 0;
  endIndex: number = 1;
  progress: number = 0;
  correctScore: number = 0;
  progressBar: boolean = true;
  finish: boolean = false;
  rank: any;
  pos: string[] = ['noun', 'verb', 'adverb', 'adjective'];

  // Injetct needed services
  constructor(
    private router: Router,
    private wordsService: WordsService,
    private toastr: ToastrService
  ) {
    // 1st way this line to fetch name from home component
    //  this.userName =this.router.getCurrentNavigation()?.extras.state?.['data'].name || 'user'

    // 2nd way
    this.userName = localStorage.getItem('name') || 'user';
  }

  /* On submit to each question I do the following 
   - increase the start index and end index to display next question
   - increase progress bar precentage
  */
  click(data: any) {
    this.startIndex++;
    this.endIndex++;
    this.progressBar = false;
    this.progress += 10;
    let wordData = this.questions[this.startIndex - 1];

    /**
     * when endIndex == 11 this means that there are no more questions
     * so I do the following
     * - hide progress bar a
     * - child comoponent to dispaly rank
     * - caculate score
     * - call postScore function which takes the score and calulate the rank
     */
    if (this.endIndex == 11) {
      this.finish = true;
      this.progressBar = true;
      // score calculation
      let finalScore = (this.correctScore / 10) * 100;
      this.postScore(finalScore);
    }

    // Get feddback on submitted answer
    if (wordData.pos == data.pos) {
      // in case answer is correct
      this.toastr.success('Success');
      this.correctScore++;
    } else {
      // answer is wrong
      this.toastr.error('Error');
    }
  }

  /* take score and call postScore function which calls rank endpoint
    which calaculate rank so that i can display it to the user
  */
  postScore(score: any) {
    let obj = { score };
    this.wordsService.postScore(obj).subscribe({
      next: (res: any) => {
        this.rank = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  // call getWords fucntion which call words endpoint
  getWords() {
    this.wordsService.getWords().subscribe({
      next: (res: any) => {
        console.log(res);
        this.questions = res;
      },
    });
  }

  ngOnInit(): void {
    // display questions when component is rendered
    this.getWords();
  }
}
