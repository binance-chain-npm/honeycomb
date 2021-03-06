describe('CopyToClipboard', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-copytoclipboard--default', themeId: 'GoldLight' });
    cy.clock();

    cy.get('[data-testid="light.copy-to-clipboard.copy-icon"]').should('be.visible');

    cy.percySnapshot('CopyToClipboard');

    cy.get('[data-testid="light.copy-to-clipboard"]').click();
    cy.tick(1000);
    cy.get('[data-testid="light.copy-to-clipboard.tick-icon"]').should('be.visible');
  
    cy.percySnapshot('CopyToClipboard after clicking');

    cy.tick(10000);
    cy.get('[data-testid="light.copy-to-clipboard.copy-icon"]').should('be.visible');
  });
});
