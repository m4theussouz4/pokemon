import { Component, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'poke-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modal') modal: Modal;
  private bootstrapModal: Modal;

  constructor() { }

  open() {
    this.bootstrapModal = new Modal(this.modal.nativeElement) 
    this.bootstrapModal.show()
  }

  close() {
    this.bootstrapModal.hide();
  }
}
