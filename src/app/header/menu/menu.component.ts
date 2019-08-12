import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: any;

  constructor() {
    this.menuList = [
      {route : '/transitions' , name : 'Resumo'},
      {route : '/' , name : 'Dashboard'},
      {route : '/' , name : 'Configurações'}
    ];
   }
 
  ngOnInit() {
    
  }

}
