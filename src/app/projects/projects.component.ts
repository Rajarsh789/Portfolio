import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() {
    AOS.init();
    console.log("project us");
  
    }

  ngOnInit() {
    
  }

}
