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

  public posts: any;
  public post: any;
  public singlePost: boolean;

  constructor(
    private _postsRequest: PostsService,
    private _route: ActivatedRoute,
    private _router: Router) {

    // this.post = { title: '', body: '', comments: ''};

    this.singlePost = false;
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      if (params.id) {
        this.singlePost = true;
        this.getPost(params.id);
        this.getPostComments(params.id);
      }
    });

    this.fetchPosts();
  }

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

  GoToPost(id: Number) {
    this._router.navigate(['/posts/' + id]);
  }

}
