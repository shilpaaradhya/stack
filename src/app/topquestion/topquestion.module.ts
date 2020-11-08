import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopquestionComponent } from './topquestion.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'



const ROUTES:Routes=[{ path: '', component: TopquestionComponent}];

@NgModule({
  declarations: [TopquestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES) 
  ]
})
export class TopquestionModule { }
