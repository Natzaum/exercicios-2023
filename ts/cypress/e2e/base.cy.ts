describe('checa elementos básicos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('titulo do trabalho existe', () => {
    cy.get('h2').contains('Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP');
    cy.compareSnapshot('Trabalho - Base');
  });

  it('botão de expandir resumo existe', () => {
    cy.get('.btn-show-more').contains('ver mais');
    cy.compareSnapshot('Trabalho - Resumo expandido');
  });

  it('botão de criar tópico existe', () => {
    cy.get('.btn-create-topic').contains('criar tópico');
  });

  it('expandir tópico funciona', () => {
    cy.get('.answered-topic').eq(0).click();
    cy.get('.ops-topic-subject').eq(0).click();
    cy.get('.comments-container').should('exist');
    cy.compareSnapshot('Trabalho - Card de topico expandido');
  });

  it('clicar em `criar tópico` exibe o formulário', () => {
    cy.get('.btn-create-topic').eq(0).click();
    cy.get('button').contains('Enviar')
    cy.get('.assunto').contains('Assunto');
    cy.get('body').contains('Conteúdo');
    cy.get('body').contains('Defina um tópico sucinto para notificar os autores...');
    cy.compareSnapshot('Trabalho - Criando novo topico');
  });

  it('enviar o formulário exibe mensagem de sucesso', () => {
    cy.get('.btn-create-topic').eq(0).click();
    cy.get('button').eq(0).click();
    cy.get('body').contains('Aguardando feedback dos autores');
    cy.compareSnapshot('Trabalho - Topico enviado');
  });

})
