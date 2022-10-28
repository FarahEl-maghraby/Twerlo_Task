import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  url:string = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getWords(){
    return this.http.get(this.url + 'words')
  }

  postScore(data:any){
    return this.http.post(this.url + 'rank',data)
  }
}
