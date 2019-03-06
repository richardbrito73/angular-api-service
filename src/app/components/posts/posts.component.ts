import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PostsService} from './posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  public posts: any; // For all posts
  public post: any; // For a single post
  public singlePost: boolean; // To activate the comments tab for a single post

  constructor(
    private _postsRequest: PostsService, // Posts Service
    private _route: ActivatedRoute,
    private _router: Router) {

    this.singlePost = false; // For all posts te comments tab will be deactivated
  }

  ngOnInit() {
    // Detect the ID params to read a single post
    this._route.params.subscribe((params: Params) => {
      if (params.id) {
        this.singlePost = true;
        this.getPost(params.id);
        this.getPostComments(params.id);
      }
    });
    // Get all posts
    this.fetchPosts();
  }

  /**
   * Fetch all posts
   */
  fetchPosts() {
    this._postsRequest.fetchPosts().subscribe(
      result => {
        this.posts = result;
        console.log(this.posts);
      },
      error => {
        console.log(error);
      }
    );
  }
  /**
   * Get a single post
   */
  getPost(id: Number) {
    this._postsRequest.getPost(id).subscribe(
      result => {
        this.post = result;
        console.log(this.post);
      },
      error => {
        console.log(error);
      }
    );
  }
 /**
   * Get all comments from a single post
   */
  getPostComments(id: Number) {
    this._postsRequest.getPostComments(id).subscribe(
      result => {
        this.post.comments = result;
        console.log(this.post.comments);
      },
      error => {
        console.log(error);
      }
    );
  }
  /**
   * Go to post link
   */
  GoToPost(id: Number) {
    this._router.navigate(['/posts/' + id]);
  }

}
