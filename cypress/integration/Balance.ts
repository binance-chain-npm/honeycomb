const NON_BREAKING_SPACE = '\u00A0';

describe('Balance', () => {
  it('renders fiat currencies correctly', () => {
    cy.visitStory({ storyId: 'elements-balance--default', themeId: 'GoldLight' });

    cy.percySnapshot('Balance');

    cy.get('[data-testid="en-usd"]').should('have.text', '$12,345.67');
    cy.get('[data-testid="en-bnb"]').should('have.text', `12,345.67${NON_BREAKING_SPACE}BNB`);
    cy.get('[data-testid="es-usd"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}$`);
    cy.get('[data-testid="es-bnb"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}BNB`);
  });
});
