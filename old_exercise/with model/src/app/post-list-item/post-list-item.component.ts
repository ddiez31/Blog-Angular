import { Component } from "@angular/core";
import { PostComponent } from "../post/post.component";

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.scss"]
})
export class PostListItemComponent extends PostComponent {
  constructor() {
    super();
  }
}
