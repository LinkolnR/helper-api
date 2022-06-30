import { ArrayService } from "../../../src/services/ArrayService"


describe('ArrayService', () => {
    let _service: ArrayService
  
    it ('deveria instanciar corretamente a classe', () => {
      _service = new ArrayService()
  
      expect(_service).toBeTruthy()
    })
  
    it('Deve devolver o array ordenado em ordem crescente , sem tirar os duplicados', () => {
      const resultado = _service.getLista(["a","b","h","z","a","g"],"s", "asc","n")
      
      expect(resultado).toEqual(["a","a","b","g","h","z"])
    })
  
    it('Deve devolver o array ordenado em ordem crescente , tirando os duplicados', () => {
        const resultado = _service.getLista(["a","b","h","z","a","g"],"s", "asc","s")
        
        expect(resultado).toEqual(["a","b","g","h","z"])
      })

    it('Deve devolver o array ordenado em ordem descrescente , tirando os duplicados', () => {
        const resultado = _service.getLista(["a","b","h","z","a","g"],"s", "desc","s")
        
        expect(resultado).toEqual(["z","h","g","b","a"])
      })

    it('Deve devolver o array ordenado em ordem descrescente , tirando os duplicados', () => {
        const resultado = _service.getLista(["a","b","h","z","a","g"],"s", "desc","n")
        
        expect(resultado).toEqual(["z","h","g","b","a","a"])
      })
  })