import { Injectable } from "@angular/core";

@Injectable()
export class BingoGeneratorService{
    

    gerarListaCartelas(quantidadeCartelas: number): Array<Cartela>{
        let cartelas = new Map<string, Cartela>();
        
        while(cartelas.size < quantidadeCartelas){
            let cartela = this.gerarCartela();
            const keyCartela = JSON.stringify(cartela)
            if(!cartelas.get(keyCartela)){
                cartelas.set(keyCartela, cartela);
            }
        }
        console.log(cartelas.values());
        return Array.from(cartelas.values());
    }

    private gerarCartela(){
        
        let b = new Set<number>();
        let i = new Set<number>();
        let n = new Set<number>();
        let g = new Set<number>();
        let o = new Set<number>();

        while(b.size != 5){
            b.add(randomInt(1,15))
        }
        while(i.size != 5){
            i.add(randomInt(16,30))
        }
        while(n.size != 5){
            n.add(randomInt(31,45))
        }
        while(g.size != 5){
            g.add(randomInt(46,60))
        }
        while(o.size != 5){
            o.add(randomInt(61,75))
        }

        let cartela = new Cartela();

        cartela.b = Array.from(b).sort((a, b)=> a - b);
        cartela.i = Array.from(i).sort((a, b)=> a - b);
        cartela.n = Array.from(n).sort((a, b)=> a - b);
        cartela.g = Array.from(g).sort((a, b)=> a - b);
        cartela.o = Array.from(o).sort((a, b)=> a - b);

        return cartela;
    }
}
    
export class Cartela{
    b = new Array<number>();
    i = new Array<number>();
    n = new Array<number>();
    g = new Array<number>();
    o = new Array<number>();
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;