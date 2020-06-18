describe('Modal', () => {
  it('opens and closes', () => {
    cy.visitStory({ storyId: 'elements-modal--default', themeId: 'GoldDark' });

    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.get('[data-testid="MyModal.box"]').should('be.visible');

    cy.get('[data-testid="MyModal.close-btn"]').click();
    cy.get('[data-testid="MyModal.box"]').should('not.be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-modal--default', themeId: 'GoldDark' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('Modal with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-modal--default', themeId: 'GoldLight' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('Modal with Gold Light theme', { widths: [800] });
  });
});
