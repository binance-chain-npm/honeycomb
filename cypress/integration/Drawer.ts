describe('Drawer', () => {
  it('opens and closes', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-drawer--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.drawer.container"]').should('not.be.visible');
    cy.get('[data-testid="light.drawer.content"]').should('not.be.visible');

    cy.get('[data-testid="light.btn-open"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.drawer.container"]').should('be.visible');
    cy.get('[data-testid="light.drawer.content"]').should('be.visible');
    cy.percySnapshot('Drawer');

    cy.get('[data-testid="light.drawer.container"]').click(0, 0);
    cy.tick(10000);
    cy.get('[data-testid="light.drawer.container"]').should('not.be.visible');
    cy.get('[data-testid="light.drawer.content"]').should('not.be.visible');
  });
});
