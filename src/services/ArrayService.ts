export class ArrayService {
    constructor() {}
  
    getLista = (array: Array<String>, y: boolean,z: string,w : boolean) => {
        if (y){
            if  (z == 'desc'){
                array.sort().reverse()
            }else{
                array.sort()
                
            }
        }
        if (w){
            let arr = [];
            let a;
            for (a  of array){
                if (arr.indexOf(a)===-1){
                    arr.push(a)
                    console.log('adiciona',a)
            
                }
            }
            return arr;
        }
      return array;
    };
}