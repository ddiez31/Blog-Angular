import { Component, Input } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent {
  @Input() post: Post;

  constructor(private postsService: PostsService, private router: Router) {
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return "green";
    } else if (this.post.loveIts < 0) {
      return "red";
    }
  }

  loveIt() {
    this.post.loveIts += 1;
    this.postsService.updatePost();
  }
  
  dontLoveIt() {
    this.post.loveIts -= 1;
    this.postsService.updatePost();
  }

}
