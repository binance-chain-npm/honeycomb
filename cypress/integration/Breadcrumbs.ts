describe('Breadcrumbs', () => {
  it('works when clicking on label', () => {
    cy.visitStory({ storyId: 'elements-breadcrumbs--default', themeId: 'GoldDark' });

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page A');
    cy.get('[data-testid="light.breadcrumb.1"]').should('have.text', 'A.1');

    cy.get('[data-testid="light.toggle.A1-A2"]').click();

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page A');
    cy.get('[data-testid="light.breadcrumb.1"]').should('have.text', 'A.2');

    cy.get('[data-testid="light.toggle.A1-A2"]').click();

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page A');
    cy.get('[data-testid="light.breadcrumb.1"]').should('have.text', 'A.1');

    cy.get('[data-testid="light.toggle.A-B"]').click();

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page B');
    cy.get('[data-testid="light.breadcrumb.1"]').should('not.exist');

    cy.get('[data-testid="light.toggle.A-B"]').click();

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page A');
    cy.get('[data-testid="light.breadcrumb.1"]').should('have.text', 'A.1');

    cy.get('[data-testid="light.toggle.A-B"]').click();

    cy.get('[data-testid="light.breadcrumb.0"]').should('have.text', 'Page B');
    cy.get('[data-testid="light.breadcrumb.1"]').should('not.exist');
  });
});
