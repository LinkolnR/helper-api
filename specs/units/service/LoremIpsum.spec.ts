import {LoremIpsumService} from "../../../src/services/LoremIpsumService"

describe('Teste do Lorem Ipsum', () => {
    let _service: LoremIpsumService
  
    it ('deveria instanciar corretamente a classe', () => {
      _service = new LoremIpsumService()
  
      expect(_service).toBeTruthy()
    })

    it('Deve uma string com uma (1) palavra, aqui vamos dar split e olhar para o tamanho', () => {
      const resultado = _service.getLoremIpsum(1)
      let tamanho = resultado.split(" ").length
      expect(tamanho).toEqual(1)
    })

    it('Deve uma string com duas (2) palavra, aqui vamos dar split e olhar para o tamanho', () => {
      const resultado = _service.getLoremIpsum(2)
      let tamanho = resultado.split(" ").length
      expect(tamanho).toEqual(2)
    }) 

    it('Deve uma string com duas (3) palavra, aqui vamos dar split e olhar para o tamanho', () => {
      const resultado = _service.getLoremIpsum(3)
      let tamanho = resultado.split(" ").length
      expect(tamanho).toEqual(3)
    })
  
  })