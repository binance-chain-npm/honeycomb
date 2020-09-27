describe('TabControl', () => {
  it('behaves correctly', () => {
    cy.visitStory({ storyId: 'elements-tabcontrol--default', themeId: 'GoldLight' });

    cy.get('[data-testid="tab-control.huge"]').should('be.visible');
    cy.get('[data-testid="tab-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="tab-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="tab-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.percySnapshot('TabControl');

    cy.get('[data-testid="tab-control.huge.1"]').click();
    cy.get('[data-testid="tab-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="tab-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="tab-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
  });
});
