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

  it('handles clicking on items', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('[data-testid="Dropdown.target"]').click();

    cy.get('[data-testid="Dropdown.content.item1"]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('item1');
      });
  });
});
