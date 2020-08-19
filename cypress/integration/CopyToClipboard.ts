describe('CopyToClipboard', () => {
  it('renders properly in light theme', () => {
    cy.visitStory({ storyId: 'elements-copytoclipboard--default', themeId: 'GoldLight' });
    cy.clock();

    cy.get('[data-testid="copy-to-clipboard.copy-icon"]').should('be.visible');
    cy.percySnapshot('CopyToClipboard in Gold Light theme');

    cy.get('[data-testid="copy-to-clipboard"]').click();
    cy.tick(1000);
    cy.get('[data-testid="copy-to-clipboard.tick-icon"]').should('be.visible');
    cy.percySnapshot('CopyToClipboard after clicking in Gold Light theme');
  });

  it('renders properly in dark theme', () => {
    cy.visitStory({ storyId: 'elements-copytoclipboard--default', themeId: 'GoldDark' });
    cy.clock();

    cy.get('[data-testid="copy-to-clipboard.copy-icon"]').should('be.visible');
    cy.percySnapshot('CopyToClipboard in Gold Dark theme');

    cy.get('[data-testid="copy-to-clipboard"]').click();
    cy.tick(1000);
    cy.get('[data-testid="copy-to-clipboard.tick-icon"]').should('be.visible');
    cy.percySnapshot('CopyToClipboard after clicking in Gold Dark theme');
  });
});
