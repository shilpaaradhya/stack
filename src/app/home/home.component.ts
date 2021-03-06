import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl ="https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
  questUrl =  "https://stackoverflow.com/questions/64162692/how-to-build-a-multi-level-dropdown-showing-only-1-level-at-a-time"
  qaUrl : "https://api.stackexchange.com/2.2/badges?order=desc&sort=rank&site=stackoverflow"
  questionArr = [];
  check: boolean = false;
  question : any = {};
  displayItem = [];

  

constructor(  private http : HttpClient , private router: Router) {}

ngOnInit(): void {
  this.getData()
  this.getBadges()
}

  onSearch(){
    this.http.get(this.apiUrl).subscribe((data : any) => {
      console.log(data);
      this.questionArr = data.items;
      console.log(this.questionArr)
    })
  }

  getBadges(){
    this.http.get(this.qaUrl).subscribe((data : any) => {
      console.log(data);
    })
  }


  questionSearch(event){

    for (let i = 0; i < this.questionArr.length; i++) {
      if (this.questionArr[i].title == this.question.title) {
        this.questionArr[i].check = true;
      }
      else;
      this.questionArr[i].check = false;
    }
  }


  getData(){
    this.http.get(this.apiUrl).subscribe((res : any) => {
      console.log(res); 
      this.questionArr = res.items;
    })
  }
}





