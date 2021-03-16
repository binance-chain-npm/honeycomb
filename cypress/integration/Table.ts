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

    cy.percySnapshot('Table (page 1)');

    cy.get('[data-testid="light.table.pagination.go-to-1-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="light.table.pagination.2.ellipsis"]').should('exist');

    cy.percySnapshot('Table (page 2)');

    cy.get('[data-testid="light.table.pagination.go-to-2-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('not.exist');
    cy.get('[data-testid="light.table.pagination.3.ellipsis"]').should('exist');
    cy.get('[data-testid="light.table.pagination.go-to-3-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.table.pagination.0.ellipsis"]').should('exist');
    cy.get('[data-testid="light.table.pagination.4.ellipsis"]').should('exist');

    cy.percySnapshot('Table (page 4)');
  });

  it('goes back to first page if page index is invalid', () => {
    cy.visitStory({ storyId: 'tests-table--default', themeId: 'GoldLight' });

    cy.get('[data-testid="table.pagination.go-to-1-btn"]').should('exist');
    cy.get('[data-testid="table.pagination.go-to-5-btn"]').should('not.exist');
    cy.get('[data-testid="table.pagination.go-to-9-btn"]').should('not.exist');
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '10');

    cy.get('[data-testid="dropdown.target"]').click();
    cy.get('[data-testid="dropdown.option-1"]').click();

    cy.get('[data-testid="table.pagination.go-to-9-btn"]').click();
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '100');

    cy.get('[data-testid="dropdown.target"]').click();
    cy.get('[data-testid="dropdown.option-0"]').click();

    cy.get('[data-testid="table.pagination.go-to-1-btn"]').should('exist');
    cy.get('[data-testid="table.row9.col1.td"]').should('contain.text', '10');
  });

  it('sorting works correctly', () => {
    cy.visitStory({ storyId: 'elements-table--sortable', themeId: 'GoldLight' });
    cy.clock();

    for (let i = 10; i > 0; i--) {
      cy.get(`[data-testid="table.row${10 - i}.col2.td"]`).should('have.text', i);
    }
    cy.get('[data-testid="table.col2.th"]').click();
    cy.tick(10000);
    for (let i = 0; i < 10; i++) {
      cy.get(`[data-testid="table.row${i}.col2.td"]`).should('have.text', 10 - i);
    }
  });

  it('manual sorting works correctly', () => {
    cy.visitStory({ storyId: 'elements-table--sortable-with-pagination', themeId: 'GoldLight' });
    cy.clock();

    cy.get('[data-testid="table.name.th.sort-asc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="table.name.th.sort-desc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );

    cy.get('[data-testid="table.name.th"]').click();
    cy.tick(10000);

    cy.get('[data-testid="table.name.th.sort-asc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="table.name.th.sort-desc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );

    let lastElementOnFirstPage = '';
    cy.get(`[data-testid="table.row4.name.td"]`).invoke('text').then((it) => lastElementOnFirstPage = it);

    for (let i = 0; i < 4; i++) {
      cy.get(`[data-testid="table.row${i}.name.td"]`).invoke('text').then((a) => {
        cy.get(`[data-testid="table.row${i + 1}.name.td"]`).invoke('text').then((b) => {
          expect(a < b).to.be.true;
        })
      });
    }

    cy.get('[data-testid="table.pagination.go-to-1-btn"]').click();
    cy.tick(10000);

    cy.get('[data-testid="table.name.th.sort-asc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="table.name.th.sort-desc-btn"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );

    for (let i = 0; i < 4; i++) {
      cy.get(`[data-testid="table.row${i}.name.td"]`).invoke('text').then((a) => {
        expect(lastElementOnFirstPage < a).to.be.true;
        cy.get(`[data-testid="table.row${i + 1}.name.td"]`).invoke('text').then((b) => {
          expect(a < b).to.be.true;
        })
      });
    }
  });
});
