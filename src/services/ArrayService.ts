export class ArrayService {
    constructor() {}
  
    getLista = (array: Array<String>, y: string,z: string,w : string) => {
        if (y == "s"){ // y é para ordenar se quiser ordenar temos o Z para dizer crescente ou descrescente
            if  (z == 'desc'){
                array.sort().reverse()
            }else{
                array.sort()
                
            }
        }
        if (w == "s"){ // tirar duplicados
            let arr = [];
            let a;
            for (a  of array){
                if (arr.indexOf(a)===-1){
                    arr.push(a)
            
                }
            }
            return arr;
        }
      return array;
    };
}