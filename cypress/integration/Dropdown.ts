describe('Dropdown', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'tests-dropdown--default' });

    cy.get('[data-testid="Dropdown.content"]').should('not.exist');
    cy.get('[data-testid="Dropdown.target"]').click();
    cy.get('[data-testid="Dropdown.content"]').should('exist');

    cy.get('[data-testid="Dropdown.content.item1"]').should('exist');

    cy.get('[data-testid="Dropdown.content.item1"]')
      .siblings()
      .first()
      .should('not.have.attr', 'data-testid');

    cy.percySnapshot('Dropdown open with default components');
  });

  it('opens and closes clicking on many places', () => {
    cy.get('[data-testid="Dropdown.target"]').click();
    cy.get('[data-testid="Dropdown.content"]').should('not.exist');

    cy.get('[data-testid="Dropdown.target"]').click();
    cy.get('[data-testid="Dropdown.content"]').should('exist');

    cy.get('body').click(0, 0);
    cy.get('[data-testid="Dropdown.content"]').should('not.exist');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-dropdown--with-helpers', themeName: 'GoldLight' });

    cy.get('[data-testid="MyDropdown.target"]').click();
    cy.percySnapshot('Dropdown with Gold Light theme');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-dropdown--with-helpers', themeName: 'GoldDark' });

    cy.get('[data-testid="MyDropdown.target"]').click();
    cy.percySnapshot('Dropdown with Gold Dark theme');
  });
});
