describe('Drawer', () => {
  it('opens and closes', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-drawer--behaviour', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="btn-open"]').click();
    cy.tick(10000);

    cy.get('[data-testid="drawer.content"]').should('be.visible');
    cy.get('[data-testid="drawer.container"]').click(0, 0);
    cy.get('[data-testid="drawer.content"]').should('not.be.visible');

    cy.percySnapshot('Drawer with Gold Light theme');
  });
});
