import { Injectable } from '@angular/core';
import { Transition } from './model/transition.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  private transationList = new Array<Transition>(); // Variavel Array com a Lista da dar Push
  private transationSubject = new Subject<Array<Transition>>(); // Subject para dar Next e atualizar o componente lista

  private transationSubject2 = new BehaviorSubject(this.transationList); // Subject para dar Next e atualizar o componente lista

  constructor() { }

  initList(): void {
    // Verifica se existe lista de transação
    console.log(this.transationSubject2.getValue);
    // console.log(this.transationSubject2.getValue());

    const transitionsData = localStorage.getItem('transitions');
    // console.log('existe' + JSON.stringify(this.transationSubject));
    if (transitionsData) {
      console.log('existe');
    } else {
     // localStorage.setItem('transitions', );
    }
    // private dataSource = new BehaviorSubject<Transition>(new Data());
   //  data = this.dataSource.asObservable();

  }

  addTransition(newTransition: Transition): void {
    this.transationList.push(newTransition);

    this.updateTransitions();
  }

  private updateTransitions(): void {
    // Evento Next altera o valor da variavel e faz todos que estão ouvindo ele receber a alteração
    this.transationSubject.next(this.transationList);
  }

  listenTransition(): Observable<Array<Transition>> {
    // Essa função retorna um Observable para que quiser ouvir a variavel
    // console.log('Observando alterações na lista');

    return this.transationSubject.asObservable();
  }

}
