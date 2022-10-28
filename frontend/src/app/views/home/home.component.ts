import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**Home Component has one input field which takes name from user and naviagtes
   * to questions compoonent */ 
  constructor(private router:Router) { }
  onSubmit(data:any){
 // 1st way:- we passed name to navigation component in order to be displayed there
//  this.router.navigate(['questions'],{state:{data:data.name}})

    // 2nd way to store in localStorage
    localStorage.setItem('name',data.name)
    this.router.navigateByUrl('questions')

  }

  ngOnInit(): void {
  }

}
