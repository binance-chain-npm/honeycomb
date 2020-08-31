describe('Select', () => {
  it('displays modal on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.content"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.content"]').should('not.exist');

    cy.get('[data-testid="select.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.2"]').should('be.visible');

    cy.percySnapshot('Select while open on a small device');
  });

  it('displays dropdown on large devices', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.content"]').should('not.exist');
    cy.get('[data-testid="select.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Select while open on a large device', { widths: [800] });
  });

  it('can open, close, select and filter', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--behaviour', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="open-btn"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.2"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo"]').should('be.visible');

    cy.get('[data-testid="select.modal.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.2.tick"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.input.native-input"]').type('crazy');

    cy.get('[data-testid="select.modal.item.0"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.1"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.2"]').should('not.exist');
    cy.get('[data-testid="select.modal.item.photo"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.modal.item.photo"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.box"]').should('not.exist');

    cy.get('[data-testid="open-btn"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.box"]').should('be.visible');
    cy.get('[data-testid="select.modal.item.photo.tick"]').should('be.visible');

    cy.percySnapshot('Select while open with option selected');
  });
});
