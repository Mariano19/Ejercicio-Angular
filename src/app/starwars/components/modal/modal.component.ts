import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {
  
  // Aca seria mejor tener directamente el objeto en cuetsion mediante un solo input plant: BigDataPlant
  @Input() title = '';
  @Input() gravity = '';
  @Input() climate = '';
  @Input() diameter = '';
  @Input() terrain = '';
  @Input() population = '';
  @Input() created = '';
  @Input() rotation = '';

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // Para establecer la configuracion del modal en el momento de abrirlo deberiamos pasar los parametros como config del metodo open
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
  }


  open(content: any) {
    this.modalService.open(content);
  }

}


