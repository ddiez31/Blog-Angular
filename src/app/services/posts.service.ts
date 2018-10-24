import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/';
import { Post } from 'src/app/models/post';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    try {
      firebase.database().ref('/posts').set(this.posts);      
    } catch (error) {
      console.log(error);
    }
  }

  getPosts() {
    try {
      firebase.database().ref('/posts')
        .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
        );      
    } catch (error) {
      console.log(error);
    }
  }

  createNewPost(newPost: Post) {
    try {
      this.posts.push(newPost);
      this.savePosts();
      this.emitPosts();      
    } catch (error) {
      console.log(error);
    }
  }

  updatePost() {
    try {
      this.posts.values();
      this.savePosts();
      this.emitPosts();      
    } catch (error) {
      console.log(error);
    }
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }


}

