// beforeEach(() => {
//   cy.viewport(1920, 1080);
//   cy.visit('https://prediktor-staging.bettingexpert.com/');
//   cy.wait(500);
//   Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });
// });

describe('CI CD', () => {
  it('login', () => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.get('h1').should('have.text', 'todos');
  });


  it('login2', () => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.get('h1').should('have.text', 'todosS');
  });


  it('login3', () => {
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.get('h1').should('have.text', 'todos');
  });


});
