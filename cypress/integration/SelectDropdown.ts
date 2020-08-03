describe('Select variant="dropdown"', () => {
  it('displays modal on small devices', () => {
    cy.viewport(400, 600);
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });

    cy.get('[data-testid="select"]').click();

    cy.get('[data-testid="select.dropdown.modal.content"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.dropdown.content"]').should('not.exist');

    cy.get('[data-testid="select.dropdown.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="select.dropdown.modal.item.2"]').should('be.visible');
  });

  it('displays dropdown on large devices', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });

    cy.get('[data-testid="select"]').click();

    cy.get('[data-testid="select.dropdown.modal.content"]').should('not.exist');
    cy.get('[data-testid="select.dropdown.dropdown.content"]').should('be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldDark' });
    cy.clock();
    cy.get('[data-testid="select"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('select.dropdown with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.clock();
    cy.get('[data-testid="select"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('select.dropdown with Gold Light theme', { widths: [800] });
  });
});
