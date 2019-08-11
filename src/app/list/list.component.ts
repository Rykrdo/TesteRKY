import { TransitionService } from '../shared/transition.service';
import { Transition } from './../shared/model/transition.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  transitionList: Array<Transition>;
  totallist: any;
  statusTransaction: string;


  constructor(
    private transitionService: TransitionService
  ) { }

  ngOnInit() {
    this.transitionService.initList();
    this.listenTransition();

  }

  updateList(): void {
    this.totallist = 0;
    this.transitionList.forEach((v, k) => {

      if (v.metodo === '+') {
        this.totallist += v.valor;
      } else {
        this.totallist -= v.valor;
      }
      if (this.totallist > 0) {
        this.statusTransaction = 'Lucro';
      } else {
        this.statusTransaction = 'Prejuizo';
      }

    });
  }

  listenTransition(): void {
    this.transitionService.listenTransition().subscribe((transitionList: Array<Transition>) => {
      this.transitionList = transitionList;
      this.updateList();
    });
  }

}
