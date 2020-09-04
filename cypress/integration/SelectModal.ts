describe('Select', () => {
  it('renders correctly', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--modal', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0"]').should('be.visible');
    cy.get('[data-testid="select.item.1"]').should('be.visible');
    cy.get('[data-testid="select.item.2"]').should('be.visible');
    cy.get('[data-testid="select.item.photo"]').should('be.visible');

    cy.get('[data-testid="select.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.2.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.input.native-input"]').type('crazy');

    cy.get('[data-testid="select.item.0"]').should('not.exist');
    cy.get('[data-testid="select.item.1"]').should('not.exist');
    cy.get('[data-testid="select.item.2"]').should('not.exist');
    cy.get('[data-testid="select.item.photo"]').should('be.visible');
    cy.get('[data-testid="select.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.item.photo"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.box"]').should('not.exist');

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.box"]').should('be.visible');
    cy.get('[data-testid="select.item.photo.tick"]').should('be.visible');

    cy.percySnapshot('<Select variant="modal" />');
  });
});
