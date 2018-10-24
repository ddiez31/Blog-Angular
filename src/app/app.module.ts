import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { appRoutes } from "./modules/routes.module";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostListItemComponent } from "./components/post-list/post-list-item/post-list-item.component";
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { NewPostComponent } from './components/post-list/new-post/new-post.component';

import { PostsService } from "./services/posts.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostListItemComponent,
    FourOhFourComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
