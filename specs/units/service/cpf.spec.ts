import { CpfService } from "../../../src/services/CpfService"

describe('Teste do CPF', () => {
    let _service : CpfService
    it ('deveria instanciar corretamente a classe', () => {
        _service = new CpfService()
    
        expect(_service).toBeTruthy()
      })

      
      it('Deve verificar se um cpf é válido, teste para um válido retorna true', () => {
          let cpf = "184630356-72"
          const resultado = _service.validaCpf(cpf)
          expect(resultado).toBe(true)
        }) 
        
        it('Deve verificar se um cpf é válido, teste para um inválido retorna false', () => {
            let cpf = "000000000-10"
            const resultado = _service.validaCpf(cpf)
            expect(resultado).toBe(false)
        }) 

        // COM OS TESTES DE VERIFICAR FUNCIONANDO
        // it('Deve retornar um cpf válido', () => {
        //     const resultado  = _service.geraCpf()
        //     let tamanho = resultado.length
        //     expect(tamanho).toEqual(1)
        // })
  })