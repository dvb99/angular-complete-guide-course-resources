import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

 
@Injectable({
    providedIn : 'root'
})
export class GitHubService {
 
  baseURL: string = "https://api.github.com/";
  params = new HttpParams().set('sort', 'created').set('order', 'asc');
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private http: HttpClient) {
  }
 
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos')
  }
 
}