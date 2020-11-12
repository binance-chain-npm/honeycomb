describe('Balance', () => {
  const NON_BREAKING_SPACE = '\u00A0';

  it('renders fiat currencies correctly', () => {
    cy.visitStory({ storyId: 'elements-balance--default', themeId: 'GoldLight' });

    cy.percySnapshot('Balance');

    cy.get('[data-testid="light.en-usd"]').should('have.text', '$12,345.67');
    cy.get('[data-testid="light.en-bnb"]').should('have.text', `12,345.67${NON_BREAKING_SPACE}BNB`);
    cy.get('[data-testid="light.es-usd"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}$`);
    cy.get('[data-testid="light.es-bnb"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}BNB`);
  });
});
