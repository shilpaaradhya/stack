import { Component ,  OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems: any[];

  constructor( private router: Router) { }

  ngOnInit(): void {

    
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    window.location.href = "/";
  }
}





