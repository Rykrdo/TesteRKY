import { Injectable } from '@angular/core';
import { Transition } from './model/transition.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  private transationList = new Array<Transition>();
  private transationSubject = new BehaviorSubject([]);

  constructor() { }

  initList(): void {
    const transitionsData = localStorage.getItem('transitions');

    if (transitionsData) {
      this.transationList = JSON.parse(transitionsData);
    } else {
      this.transationList = [];
    }
    this.updateTransitions();
  }

  saveStorage(): void {
    localStorage.setItem('transitions', JSON.stringify(this.transationList));
  }

  addTransition(newTransition: Transition): void {
    this.transationList.push(newTransition);
    this.saveStorage();
    this.updateTransitions();
  }

  private updateTransitions(): void {
    this.transationSubject.next(this.transationList);
  }

  listenTransition(): Observable<Array<Transition>> {
    return this.transationSubject.asObservable();
  }

}
