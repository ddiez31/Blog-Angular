import { Component } from "@angular/core";
import { PostComponent } from "../post/post.component";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent extends PostComponent {
  constructor() {
    super();
  }
}
