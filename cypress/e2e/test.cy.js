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
    cy.visit('https://prediktor-staging.bettingexpert.com/');
    cy.wait(500);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.get('div.justify-center.gap-2 button:nth-child(1)').should('be.visible').click().then(() => {
      cy.get('div.m-4 img[alt="logo"]').should('be.visible');
    });
    cy.get('input[name="email"]').should('be.visible').type('sjocic@bettercollective.com');
    cy.get('input[name="password"]').should('be.visible').type('Better2022');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

  });
});
