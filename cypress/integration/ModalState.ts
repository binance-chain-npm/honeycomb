describe('ModalState', () => {
  it('opens and closes', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modalstate--default', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.get('[data-testid="light.open-btn"]').click();
    cy.tick(10000);

    cy.percySnapshot('ModalState with Gold Light theme');

    cy.get('[data-testid="light.modal-state.content"]').should('be.visible');
    cy.get('[data-testid="light.modal-state.header.close-btn"]').click();
    cy.get('[data-testid="light.modal-state.content"]').should('not.be.visible');

    cy.get('[data-testid="dark.open-btn"]').click();
    cy.tick(10000);

    cy.percySnapshot('ModalState with Gold Dark theme');
  });
});
