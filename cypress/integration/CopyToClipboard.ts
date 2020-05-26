describe('CopyToClipboard', () => {
  it('renders properly in light theme', () => {
    cy.visitStory({ storyId: 'elements-copytoclipboard--default', themeName: 'GoldLight' });

    cy.get('[data-testid="copy-to-clipboard.text"]');
    cy.percySnapshot('CopyToClipboard in Gold Light theme');

    cy.clock();
    cy.get('[data-testid="copy-to-clipboard.text"]').click();
    cy.tick(1000);
    cy.percySnapshot('CopyToClipboard after clicking in Gold Light theme');
  });

  it('renders properly in dark theme', () => {
    cy.visitStory({ storyId: 'elements-copytoclipboard--default', themeName: 'GoldDark' });

    cy.get('[data-testid="copy-to-clipboard.text"]');
    cy.percySnapshot('CopyToClipboard in Gold Dark theme');

    cy.clock();
    cy.get('[data-testid="copy-to-clipboard.text"]').click();
    cy.tick(1000);
    cy.percySnapshot('CopyToClipboard after clicking in Gold Dark theme');
  });
});
