import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PostsService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com';
  }

  fetchPosts(): Observable<any> {
    return this._http.get(this.url + '/posts');
  }

  getPost(id: Number): Observable<any> {
    return this._http.get(this.url + '/posts/' + id);
  }

  getPostComments(id: Number): Observable<any> {
    return this._http.get(this.url + '/posts/' + id + '/comments');
  }

}
