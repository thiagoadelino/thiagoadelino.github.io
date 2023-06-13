import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BingoGeneratorComponent } from './bingo-generator/bingo-generator/bingo-generator.component';

const routes: Routes = [
  {path: 'bingo-generator' , component: BingoGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
