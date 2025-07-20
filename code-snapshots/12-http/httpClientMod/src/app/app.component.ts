import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
 
export interface Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone : false
})
export class AppComponent implements OnInit {
 
  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[] = [];
 
  
  constructor(private http: HttpClient) {
  }
 
  ngOnInit() {
    this.getRepos()
  }
 
 
  public getRepos() {
 
    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe( {
        next: (response) => {
          console.log('response received')
          console.log(response);
          this.repos = response; 
        },
        error: (error) => {
          console.error('Request failed with error')
          alert(error);
        },
        complete: () => {
          console.log('Request completed')
        }
      }
    )
  }
}
 