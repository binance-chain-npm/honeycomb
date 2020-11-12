describe('Table', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-table--controlled-with-pagination', themeId: 'GoldLight' });
    cy.clock();

    cy.get('[data-testid="light.table.row0.col1.td"]').should('contain.text', '16 Hello');
    cy.get('[data-testid="light.table.pagination.go-to-0-btn"]').should('have.text', '1');
    cy.get('[data-testid="light.table.pagination.go-to-0-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.row0.col1.td"]').should('contain.text', '1 Hello');
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="light.table.pagination.1.ellipsis"]').should('exist');

    cy.percySnapshot('Table (page 1) with Gold Light theme');

    cy.get('[data-testid="light.table.pagination.go-to-1-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="light.table.pagination.2.ellipsis"]').should('exist');

    cy.percySnapshot('Table (page 2) with Gold Light theme');

    cy.get('[data-testid="light.table.pagination.go-to-2-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="light.table.pagination.3.ellipsis"]').should('exist');
    cy.get('[data-testid="light.table.pagination.go-to-3-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('exist');
    cy.get('[data-testid="light.table.pagination.4.ellipsis"]').should('exist');

    cy.percySnapshot('Table (page 4) with Gold Light theme');
  });

  it('goes back to first page if page index is invalid', () => {
    cy.visitStory({ storyId: 'tests-table--default', themeId: 'GoldLight' });

    cy.get('[data-testid="table.pagination.go-to-1-btn"]').should('exist');
    cy.get('[data-testid="table.pagination.go-to-5-btn"]').should('not.exist');
    cy.get('[data-testid="table.pagination.go-to-9-btn"]').should('not.exist');
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '10');

    cy.get('[data-testid="dropdown.target"]').click();
    cy.get('[data-testid="dropdown.content.option-1"]').click();

    cy.get('[data-testid="table.pagination.go-to-9-btn"]').click();
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '100');

    cy.get('[data-testid="dropdown.target"]').click();
    cy.get('[data-testid="dropdown.content.option-0"]').click();

    cy.get('[data-testid="table.pagination.go-to-1-btn"]').should('exist');
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '10');
  });
});
