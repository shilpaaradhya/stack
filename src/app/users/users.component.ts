import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  apiUrl ="https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow";
  questUrl =  "https://stackoverflow.com/questions/64162692/how-to-build-a-multi-level-dropdown-showing-only-1-level-at-a-time"
  qaUrl : "https://api.stackexchange.com/2.2/badges?order=desc&sort=rank&site=stackoverflow"
  questionArr = [];
  check: boolean = false;
  question : any = {};
  displayItem = [];
  picArray = [];

  

constructor(  private http : HttpClient , private router: Router) {}

ngOnInit(): void {
  this.getData();
  this.getProfiles();
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

    
  }


  getData(){
    this.http.get(this.apiUrl).subscribe((res : any) => {
      console.log(res); 
      this.questionArr = res.items;
    })
  }

  getProfiles(){
    this.http.get(this.apiUrl).subscribe((res : any) => {
      console.log(res); 
      this.picArray = res.items;
    })
  }
}














