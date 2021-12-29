import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {
  
  @Input() title = '';
  @Input() gravity = '';
  @Input() climate = '';
  @Input() diameter = '';
  @Input() terrain = '';
  @Input() population = '';
  @Input() created = '';
  @Input() rotation = '';

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
  }


  open(content: any) {
    this.modalService.open(content);
  }

}


