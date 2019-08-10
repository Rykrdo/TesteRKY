import { Component, OnInit } from '@angular/core';
import { TransitionService } from '../shared/transition.service';
import { Transition } from './../shared/model/transition.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  registerForm: FormGroup;


  constructor(
    private transitionService: TransitionService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      iptTipoTransacao: ['', Validators.required],
      iptNameMercadoria: ['', Validators.required],
      iptValor: ['', Validators.required]
    });
  }

  addTransition(): void {

    if (this.registerForm.valid) {
      const transitionNew: Transition = new Transition();
        transitionNew.metodo = this.registerForm.get('iptTipoTransacao').value;
        transitionNew.descricao = this.registerForm.get('iptNameMercadoria').value;
        transitionNew.valor = this.registerForm.get('iptValor').value;

      this.transitionService.addTransition(transitionNew);

    }
  }

}
