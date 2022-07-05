

describe('Teste do CPF', () => {

    it('Deve retornar um cpf válido', () => {
        const resultado  = _service.geraCpf()
        let tamanho = resultado.split("-").length
        expect(tamanho).toEqual(1)
    })

    it('Deve verificar se um cpf é válido', () => {
        let cpf = "000000000-00"
        const resultado = _service.validaCpf(cpf)
        let tamanho = resultado.split(" ").length
        expect(tamanho).toEqual(2)
    }) 

  })