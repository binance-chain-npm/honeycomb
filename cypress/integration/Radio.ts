describe('Radio', () => {
  it('works when clicking on label', () => {
    cy.visitStory({ storyId: 'tests-radio--default', themeId: 'GoldLight' });

    cy.get('[data-testid="light.radio.native-input"]').should('not.be.checked');

    cy.get('[data-testid="light.radio.label"]').click();

    cy.get('[data-testid="light.radio.native-input"]').should('be.checked');

    cy.percySnapshot('Radio while checked');
  });
});
