import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  post: {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
  };
  
  posts = [
    {
      title: "1er post",
      content:
        "Consequat voluptate ullamco deserunt id ad culpa mollit ipsum mollit irure culpa consectetur.",
      loveIts: 3,
      created_at: new Date("09/12/18, 10:43 AM")
    },
    {
      title: "2ème post",
      content: "Sint elit sint labore consequat ullamco reprehenderit.",
      loveIts: 0,
      created_at: new Date("10/02/18, 02:14 PM")
    },
    {
      title: "3ème post",
      content:
        "Culpa pariatur cillum pariatur consectetur elit consectetur aute labore amet sunt proident officia reprehenderit.",
      loveIts: -2,
      created_at: new Date("10/14/18, 08:25 AM")
    }
  ];

  constructor() {}
}
