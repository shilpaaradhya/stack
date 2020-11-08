import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { Routes, RouterModule } from '@angular/router';


const ROUTES:Routes=[{ path: '', component: TagsComponent}];



@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES) 
  ]
})
export class TagsModule { }
