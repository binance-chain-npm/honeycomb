describe('Checkbox', () => {
  it('works when clicking on label', () => {
    cy.visitStory({ storyId: 'tests-checkbox--default' });

    cy.get('[data-testid="Checkbox.native-input"]').should('not.be.checked');

    cy.get('[data-testid="Checkbox.label"]').click();

    cy.get('[data-testid="Checkbox.native-input"]').should('be.checked');

    cy.percySnapshot('Checkbox checked');
  });
});
