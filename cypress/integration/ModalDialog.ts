describe('ModalDialog', () => {
  it('opens and closes', () => {
    cy.visitStory({ storyId: 'elements-modaldialog--default', themeId: 'GoldDark' });

    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.get('[data-testid="ModalDialog.modal-dialog"]').should('be.visible');

    cy.get('[data-testid="ModalDialog.close-btn"]').click();
    cy.get('[data-testid="ModalDialog.modal-dialog"]').should('not.be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-modaldialog--default', themeId: 'GoldDark' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('ModalDialog with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-modaldialog--default', themeId: 'GoldLight' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('ModalDialog with Gold Light theme', { widths: [800] });
  });
});
