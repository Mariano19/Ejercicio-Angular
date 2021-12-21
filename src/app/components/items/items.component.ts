import { Component, OnInit } from '@angular/core';

import {Item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        name:'marte',
        gravity: 'poca',
        climate:'seco'
      },
      {
        name:'lunes',
        gravity: 'poca',
        climate:'seco'
      }
      
    ]
  }

}
