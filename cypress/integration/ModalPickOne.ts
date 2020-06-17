describe('ModalPickOne', () => {
  it('opens and closes', () => {
    cy.visitStory({ storyId: 'tests-modalpickone--default', themeName: 'GoldLight' });

    cy.get('[data-testid="OpenButton"]').click();

    cy.get('[data-testid="MyModal.item.0"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.1"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.2"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.photo"]').should('be.visible');

    cy.get('[data-testid="MyModal.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="MyModal.item.2.tick"]').should('not.exist');
    cy.get('[data-testid="MyModal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="MyModal.input.native-input"]').type('crazy');

    cy.get('[data-testid="MyModal.item.0"]').should('not.exist');
    cy.get('[data-testid="MyModal.item.1"]').should('not.exist');
    cy.get('[data-testid="MyModal.item.2"]').should('not.exist');
    cy.get('[data-testid="MyModal.item.photo"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="MyModal.item.photo"]').click();

    cy.get('[data-testid="MyModal.box"]').should('not.exist');
    cy.get('[data-testid="OpenButton"]').click();
    cy.get('[data-testid="MyModal.box"]').should('be.visible');
    cy.get('[data-testid="MyModal.item.photo.tick"]').should('be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-modalpickone--default', themeName: 'GoldDark' });
    cy.clock();
    cy.get('[data-testid="MyModal.item.0.tick"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('ModalPickOne with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-modalpickone--default', themeName: 'GoldLight' });
    cy.clock();
    cy.get('[data-testid="MyModal.item.0.tick"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('ModalPickOne with Gold Light theme', { widths: [800] });
  });
});
