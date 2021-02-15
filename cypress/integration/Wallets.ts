describe('Wallets', () => {
  it('custom provider and description renders correctly', () => {
    cy.customViewport({ size: 'sm' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-wallets--responsive-with-description', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.wallets.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.wallets.0"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.wallets.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );

    cy.percySnapshot('Wallets with row layout');

    cy.customViewport({ size: 'md' });
    cy.reload();
    cy.tick(10000);

    cy.get('[data-testid="light.wallets.0"]').click();
    cy.tick(10000);

    cy.percySnapshot('Wallets with column layout', { widths: [768] });
  });
});
