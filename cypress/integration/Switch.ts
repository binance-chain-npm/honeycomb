describe('Switch', () => {
  it('works when clicking on label', () => {
    cy.visitStory({ storyId: 'inputs-switch--sizes', themeId: 'GoldLight' });

    cy.get('[data-testid="light.switch.normal.native-input"]').should('not.be.checked');
    cy.get('[data-testid="light.switch.increased.native-input"]').should('not.be.checked');
    cy.get('[data-testid="light.switch.large.native-input"]').should('not.be.checked');
    cy.get('[data-testid="light.switch.huge.native-input"]').should('not.be.checked');

    cy.get('[data-testid="light.switch.normal.label"]').click();
    cy.get('[data-testid="light.switch.increased.label"]').click();
    cy.get('[data-testid="light.switch.large.label"]').click();
    cy.get('[data-testid="light.switch.huge.label"]').click();

    cy.get('[data-testid="light.switch.normal.native-input"]').should('be.checked');
    cy.get('[data-testid="light.switch.increased.native-input"]').should('be.checked');
    cy.get('[data-testid="light.switch.large.native-input"]').should('be.checked');
    cy.get('[data-testid="light.switch.huge.native-input"]').should('be.checked');

    cy.percySnapshot('Switch while checked');
  });
});
