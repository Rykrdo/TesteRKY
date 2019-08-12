import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOn = false;

  openShow(){
    if (this.menuOn === true) {
      this.menuOn = false;
    } else {
      this.menuOn = true;
    }
    console.log(this.menuOn);
  }
  constructor() { }

  ngOnInit() {
    console.log(this.menuOn)
  }

}
