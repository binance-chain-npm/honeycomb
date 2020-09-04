describe('Select variant="responsive', () => {
  it('displays modal on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
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
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal.content"]').should('not.exist');
    cy.get('[data-testid="select.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Select while open on a large device', { widths: [800] });
  });

  it('search input not rendered when children are not filterable', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--non-filterable', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.input.native-input"]').should('not.exist');

    cy.get('[data-testid="div"]').should('be.visible');
    new Array(5).fill(null).forEach((_, index) => {
      cy.get(`[data-testid="select.modal.item.${index}"]`).should('be.visible');
    });
  });
});
