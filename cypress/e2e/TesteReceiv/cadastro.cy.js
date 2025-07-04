///<reference types="cypress"/>

describe('Funcionalidade: Cadastro', () => {
    
    it('Deve cadastrar com sucesso', () => {
        cy.visit ('https://qa-01.receiv.it/testeqa.php')
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alerta')
        })
        cy.get('#nome').type('Adriano')
        cy.get('#cpf').type('45682598721')
        cy.get('.cartao-formulario > :nth-child(3) > :nth-child(4) > input').click()
        cy.get('#valor').type('520')
        cy.get('#juros').type('5')
        cy.get('#meses').type('12')
        cy.get('button[type="submit"]').click({ force: true })
        cy.get('@alerta').should(
        'have.been.calledWithMatch',
        /Pessoa cadastrada!\s*O valor corrigido no fim do período é 6678\s*/
)
     
    })
})