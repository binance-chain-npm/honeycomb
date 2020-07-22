describe('Table', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-table--controlled-pagination', themeId: 'GoldLight' });

    cy.get('[data-testid="MyTable.row.0.col.col1.td"]').should('contain.text', '16 Hello');
    cy.get('[data-testid="MyTable.pagination.go-to-6-btn"]').should('have.text', '7');
    cy.get('[data-testid="MyTable.pagination.go-to-6-btn"]').click();
    cy.get('[data-testid="MyTable.row.0.col.col1.td"]').should('contain.text', '19 Hello');

    cy.get('[data-testid="MyTable.pagination.go-to-0-btn"]').click();
    cy.get('[data-testid="MyTable.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="MyTable.pagination.1.ellipsis"]').should('exist');
    cy.percySnapshot('Table (page 1) with Gold Light theme');

    cy.get('[data-testid="MyTable.pagination.go-to-1-btn"]').click();
    cy.get('[data-testid="MyTable.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="MyTable.pagination.2.ellipsis"]').should('exist');
    cy.percySnapshot('Table (page 2) with Gold Light theme');

    cy.get('[data-testid="MyTable.pagination.go-to-2-btn"]').click();
    cy.get('[data-testid="MyTable.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="MyTable.pagination.3.ellipsis"]').should('exist');
    cy.get('[data-testid="MyTable.pagination.go-to-3-btn"]').click();
    cy.get('[data-testid="MyTable.pagination.0.ellipsis"]').should('exist');
    cy.get('[data-testid="MyTable.pagination.4.ellipsis"]').should('exist');
    cy.percySnapshot('Table (page 4) with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-table--controlled-pagination', themeId: 'GoldDark' });
    cy.percySnapshot('Table with Gold Dark theme');
  });
});
