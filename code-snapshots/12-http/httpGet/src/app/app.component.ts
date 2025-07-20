import { Component } from '@angular/core';
 
import { GitHubService } from './github.service';
import { Repos } from './repos';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone : false
})
export class AppComponent {
  userName: string = "tektutorialshub"
  repos: Repos[] = [];
 
  loading: boolean = false;
  errorMessage = "";
  constructor(private githubService: GitHubService) {
  }
 
  public getRepos() {
    this.loading = true;
    
    this.githubService.getRepos(this.userName)
      .subscribe( {
        next: (response) => {
          console.log('response received')
          this.repos = response; 
        },
        error : (err) => {
          console.error('Request failed with error')
          this.errorMessage = err;
          this.loading = false;
         },
        complete : () => {
        console.error('Request completed')      //This is actually not needed 
        this.loading = false; 
        }
      });
  }
        
}