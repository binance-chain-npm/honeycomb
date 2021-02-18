describe('Dropdown', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-dropdown--with-helpers', themeId: 'GoldLight' });

    cy.get('[data-testid="light.dropdown.content"]').should('not.exist');
    cy.get('[data-testid="light.dropdown.target"]').click();
    cy.get('[data-testid="light.dropdown.content"]').should('exist');

    cy.get('[data-testid="light.dropdown.item1"]').should('exist');

    cy.percySnapshot('Dropdown while open');
  });

  it('opens and closes clicking on many places', () => {
    cy.get('[data-testid="light.dropdown.target"]').click();
    cy.get('[data-testid="light.dropdown.content"]').should('not.exist');

    cy.get('[data-testid="light.dropdown.target"]').click();
    cy.get('[data-testid="light.dropdown.content"]').should('exist');

    cy.get('body').click(0, 0);
    cy.get('[data-testid="light.dropdown.content"]').should('not.exist');
  });

  it('handles clicking on items', () => {
    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('[data-testid="light.dropdown.target"]').click();

    cy.get('[data-testid="light.dropdown.item1"]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('item1');
      });

    cy.get('[data-testid="light.dropdown.content"]').should('not.exist');
  });

  it('selectable behaves correctly', () => {
    cy.visitStory({ storyId: 'elements-dropdown--selectable', themeId: 'GoldLight' });

    cy.get('[data-testid="light.dropdown.target"]').click();

    new Array(5).fill(null).forEach((_, index) => {
      cy.get(`[data-testid="light.dropdown.${index}"]`).should('be.visible');
      cy.get(`[data-testid="light.dropdown.${index}.tick"]`).should('not.exist');
    });

    cy.get(`[data-testid="light.dropdown.0"]`).click();
    cy.get('[data-testid="light.dropdown.target"]').click();
    cy.get(`[data-testid="light.dropdown.0.tick"]`).should('be.visible');
  });
});
