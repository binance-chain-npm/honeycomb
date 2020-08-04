const NON_BREAKING_SPACE = '\u00A0';

describe('Formatting numbers', () => {
  it('renders fiat currencies correctly', () => {
    cy.visitStory({ storyId: 'tests-numberformat--fiat', themeId: 'GoldLight' });

    cy.get('[data-testid="en"]').should('have.text', '$12,345.67');
    cy.get('[data-testid="es"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}€`);
    cy.get('[data-testid="es-usd"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}$`);
    cy.get('[data-testid="es-cny"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}¥`);
    cy.get('[data-testid="en-integer"]').should('have.text', '$12,345.00');
    cy.get('[data-testid="en-too-many-digist"]').should('have.text', '$12,345.68');
    cy.get('[data-testid="en-zero"]').should('have.text', '$0.00');
  });

  it('renders crypto currencies correctly', () => {
    cy.visitStory({ storyId: 'tests-numberformat--crypto', themeId: 'GoldLight' });

    cy.get('[data-testid="en"]').should('have.text', `12,345.67${NON_BREAKING_SPACE}BNB`);
    cy.get('[data-testid="es"]').should('have.text', `12.345,67${NON_BREAKING_SPACE}BNB`);
    cy.get('[data-testid="en-integer"]').should('have.text', `12,345.00${NON_BREAKING_SPACE}BNB`);
    cy.get('[data-testid="en-too-many-digist"]').should(
      'have.text',
      `12,345.6789${NON_BREAKING_SPACE}BNB`,
    );
    cy.get('[data-testid="en-zero"]').should('have.text', `0.00${NON_BREAKING_SPACE}BNB`);
  });
});
