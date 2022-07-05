export class CpfService {

    geraCpf = () =>{
        var cpf 
        cpf = ""
        while (cpf.length<9){
            var aleatorio = Math.floor(Math.random() * 9);
            cpf+= aleatorio
        } 
        let j = 1
        let dv = 0
        for (let index = 0; index < 9; index++) {
            if (j ==4){
                j = 1
            }
            {
                let numero  = parseInt(cpf.slice(index,index+1),10)
                dv+= numero*j
                j+=1
            }
        }
        cpf += "-" + dv
        return cpf
    }

    validaCpf = (cpf: string) =>{
        let j = 1
        let dv = 0
        for (let index = 0; index < 9; index++) {
            if (j ==4){
                j = 1
            }
            {
                let numero  = parseInt(cpf.slice(index,index+1),10)
                dv+= numero*j
                j+=1
            }
        }
        let final = parseInt(cpf.slice(10,12),10)
        if (final == dv){
            return true
        }
        return false
    }

}