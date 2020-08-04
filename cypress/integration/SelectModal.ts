describe('Select variant="modal"', () => {
  it('opens and closes', () => {
    cy.visitStory({ storyId: 'elements-select--modal', themeId: 'GoldLight' });

    cy.get('[data-testid="open-btn"]').click();

    cy.get('[data-testid="select.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.2"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo"]').should('be.visible');

    cy.get('[data-testid="select.modal.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.2.tick"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.modal.input.native-input"]').type('crazy');

    cy.get('[data-testid="select.modal.item.0"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.1"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.2"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.photo"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.modal.item.photo"]').click();

    cy.get('[data-testid="select.modal.box"]').should('not.exist');
    cy.get('[data-testid="open-btn"]').click();
    cy.get('[data-testid="select.modal.box"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('be.visible');

    cy.percySnapshot('SelectModal while open with option selected');
  });
});
