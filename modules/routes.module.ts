import { Routes } from '@angular/router';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { NewPostComponent } from 'src/app/components/post-list/new-post/new-post.component';
import { FourOhFourComponent } from 'src/app/components/four-oh-four/four-oh-four.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
];