
import { Component, Input } from '@angular/core';
import { BingoGeneratorService, Cartela } from '../service/bingo-generator.service';

@Component({
  selector: 'app-bingo-generator',
  templateUrl: './bingo-generator.component.html',
  styleUrls: ['./bingo-generator.component.scss']
})
export class BingoGeneratorComponent {

  constructor(
    private bingoGeneratorService: BingoGeneratorService
  ) { }

  cartelas: Array<Cartela>;

  @Input()
  quantidade: number;
  
  generate(){
    if(this.quantidade)
      this.cartelas = this.bingoGeneratorService.gerarListaCartelas(this.quantidade);
  }
  //cartelas: string[] = ['1','2'];
  ngOnInit(): void {
      this.cartelas = this.bingoGeneratorService.gerarListaCartelas(200);
  }

}
