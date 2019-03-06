import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PostsService {

  public url: string;

  constructor(public _http: HttpClient) {
    // Main API url
    this.url = 'https://jsonplaceholder.typicode.com';
  }
  /**
   * Fetch all posts list
   */
  fetchPosts(): Observable<any> {
    return this._http.get(this.url + '/posts');
  }
  /**
   * Get a single post by its ID
   */
  getPost(id: Number): Observable<any> {
    return this._http.get(this.url + '/posts/' + id);
  }
  /**
   * Get all comments from a single post
   */
  getPostComments(id: Number): Observable<any> {
    return this._http.get(this.url + '/posts/' + id + '/comments');
  }

}
