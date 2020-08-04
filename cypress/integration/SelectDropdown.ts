describe('Select variant="dropdown"', () => {
  it('displays modal on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.dropdown.modal.content"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.dropdown.content"]').should('not.exist');

    cy.get('[data-testid="select.dropdown.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.modal.item.2"]').should('be.visible');

    cy.percySnapshot('SelectDropdown while open on a small device');
  });

  it('displays dropdown on large devices', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.dropdown.modal.content"]').should('not.exist');
    cy.get('[data-testid="select.dropdown.dropdown.content"]').should('be.visible');

    cy.percySnapshot('SelectDropdown while open on a large device', { widths: [800] });
  });
});
