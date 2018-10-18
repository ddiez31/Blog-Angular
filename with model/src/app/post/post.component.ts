import { Component, Input } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent {
  @Input()
  post: {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  };

  constructor() {}

  getColor() {
    if (this.post.loveIts > 0) {
      return "green";
    } else if (this.post.loveIts < 0) {
      return "red";
    }
  }

  loveIt() {
    return (this.post.loveIts += 1);
  }

  dontLoveIt() {
    return (this.post.loveIts -= 1);
  }
}
