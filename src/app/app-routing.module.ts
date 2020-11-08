import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'topquestions', loadChildren: () => import('./topquestion/topquestion.module').then(mod => mod.TopquestionModule) },
    { path: 'tags', loadChildren: () => import('./tags/tags.module').then(mod => mod.TagsModule) },
    { path: 'users', loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  };

export const routingComponent = [HomeComponent]
