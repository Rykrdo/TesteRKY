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

  constructor(
    private transitionService: TransitionService
  ) { }

  ngOnInit() {
    this.transitionService.initList();
    this.listenTransition();

  }

  listenTransition(): void {

    // Se Inscreve (Subscribe) para ouvir a variavel, toda vez que alguem der next na variavel no componente de serviço, o valor aqui altera
    // Você cria uma função callback com o valor que vai ser retornado
    this.totallist = 0 ;
    this.transitionService.listenTransition().subscribe( (transitionList: Array<Transition>) => {
      // Pega a lista de Transição que foi jogada no Next e joga na variavel desse componente
      this.totallist += 1;
      this.transitionList = transitionList;


    });
  }

}
