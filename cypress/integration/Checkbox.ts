describe('Checkbox', () => {
  it('works when clicking on label', () => {
    cy.visitStory({ storyId: 'tests-checkbox--default', themeId: 'GoldLight' });

    cy.get('[data-testid="light.checkbox.native-input"]').should('not.be.checked');

    cy.get('[data-testid="light.checkbox.label"]').click();

    cy.get('[data-testid="light.checkbox.native-input"]').should('be.checked');

    cy.percySnapshot('Checkbox while checked');
  });
});
