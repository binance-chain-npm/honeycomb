describe('Toaster', () => {
  it('renders correctly on small screens', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-toaster--default', themeId: 'GoldLight' });

    cy.get('[data-testid="success-btn"]').click();
    cy.get('[data-testid="warning-btn"]').click();
    cy.get('[data-testid="danger-btn"]').click();
    cy.tick(10000);

    cy.get('[data-testid="success-toast"]').should('be.visible');
    cy.get('[data-testid="warning-toast"]').should('be.visible');
    cy.get('[data-testid="danger-toast"]').should('be.visible');

    cy.percySnapshot('Toaster while open on a small screen');
  });

  it('renders correctly on medium screens', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-toaster--default', themeId: 'GoldLight' });

    cy.get('[data-testid="success-btn"]').click();
    cy.get('[data-testid="warning-btn"]').click();
    cy.get('[data-testid="danger-btn"]').click();
    cy.tick(10000);

    cy.get('[data-testid="success-toast"]').should('be.visible');
    cy.get('[data-testid="warning-toast"]').should('be.visible');
    cy.get('[data-testid="danger-toast"]').should('be.visible');

    cy.percySnapshot('Toaster while open on a medium screen', { widths: [768] });
  });
});
