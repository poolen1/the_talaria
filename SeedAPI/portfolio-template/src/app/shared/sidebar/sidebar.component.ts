import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Toggle Click Function
    $("#menu-toggle").click(function(e: any) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}

