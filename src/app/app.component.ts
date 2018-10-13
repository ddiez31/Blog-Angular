import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  posts = [
    {
      title: "1er post",
      content:
        "Consequat voluptate ullamco deserunt id ad culpa mollit ipsum mollit irure culpa consectetur.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "2ème post",
      content: "Sint elit sint labore consequat ullamco reprehenderit.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "3ème post",
      content:
        "Culpa pariatur cillum pariatur consectetur elit consectetur aute labore amet sunt proident officia reprehenderit.",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {}
  loveIt() {}
  dontLoveIt() {}
}
