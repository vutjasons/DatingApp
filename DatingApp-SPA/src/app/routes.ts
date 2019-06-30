import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '', // this is empty because we want to concatenate nothing to the children routes ex: localhost:4200/members
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

