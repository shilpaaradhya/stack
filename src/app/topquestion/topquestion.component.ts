import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topquestion',
  templateUrl: './topquestion.component.html',
  styleUrls: ['./topquestion.component.css']
})
export class TopquestionComponent implements OnInit {


  apiUrl ="https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
  questUrl =  "https://stackoverflow.com/questions/64162692/how-to-build-a-multi-level-dropdown-showing-only-1-level-at-a-time"
  qaUrl : "https://api.stackexchange.com/2.2/badges?order=desc&sort=rank&site=stackoverflow"
  questionArr = [];
  check: boolean = false;
  question : any = {};
  displayItem = [];
  topQuest = [];

  

constructor(  private http : HttpClient , private router: Router) {}

ngOnInit(): void {

  this.getData();
}

  onSearch(){
    this.http.get(this.apiUrl).subscribe((data : any) => {
      console.log(data);
      this.questionArr = data.items;
      console.log(this.questionArr)
    })
    for (let i = 0; i < this.questionArr.length; i++) {
      if (this.questionArr[i].answer_count >= 1) {
        this.topQuest.push(this.questionArr[i])
      }
    }
    console.log(this.topQuest)
  }

  

  getBadges(){
    this.http.get(this.qaUrl).subscribe((data : any) => {
      console.log(data);
    })
  }


  questionSearch(event){

    
  }


  getData(){
    this.http.get(this.apiUrl).subscribe((res : any) => {
      console.log(res); 
      this.questionArr = res.items;
    })
  }
}






