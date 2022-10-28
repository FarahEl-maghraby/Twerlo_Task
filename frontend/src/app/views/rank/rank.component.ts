import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  /**
   * We take rank from question component (parent component)
   */
 @Input() rank:number = 0
  constructor(private router:Router) {
    
   }

   /**
    * try again function allow user to take quiz again by reloading the content of the component without refreshing the page
    */
   tryAgain() {
    let currentUrl = this.router.url;
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    
  ngOnInit(): void {
 
  }

}
