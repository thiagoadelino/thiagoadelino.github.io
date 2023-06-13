import { Component, Input, OnInit } from '@angular/core';
import { Cartela } from '../service/bingo-generator.service';

@Component({
  selector: 'app-bingo-card',
  templateUrl: './bingo-card.component.html',
  styleUrls: ['./bingo-card.component.scss']
})
export class BingoCardComponent implements OnInit {
  @Input()
  cartela: Cartela;

  constructor() { }


  ngOnInit(): void {

  }
}
