///<reference types="cypress"/>
import { faker } from "@faker-js/faker"

describe('Funcionalidade: Cadastro', () => {
    
    it('Deve cadastrar com sucesso', () => {

        const nome = faker.person.firstName()
    const cpf = faker.string.numeric(11)
    const valor = Number(faker.string.numeric({ length: 3 })) 
    const juros = Number(faker.string.numeric({ length: 2 }))
    const meses = Number(faker.string.numeric({ length: 2 }))
    const valorFinal = Math.round(valor * Math.pow(1 + juros / 100, meses))
        
        cy.visit ('https://qa-01.receiv.it/testeqa.php')
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alerta')
        })
        cy.get('#nome').type(faker.person.firstName())
        cy.get('#cpf').type(faker.string.numeric(11))
        cy.get('.cartao-formulario > :nth-child(3) > :nth-child(4) > input').click()
        cy.get('#valor').type(faker.string.numeric())
        cy.get('#juros').type(faker.string.numeric())
        cy.get('#meses').type(faker.string.numeric())
        cy.get('button[type="submit"]').click({ force: true })
        cy.get('@alerta').should(
  'have.been.calledWithMatch',
  /Pessoa cadastrada!\s*O valor corrigido no fim do período é/
);

        //it('Não deve cadastrar com sucesso com dados em branco ', () => {

    
});
     
    })