describe('ListItem', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'elements-button--default', themeId: 'GoldLight' });
    cy.percySnapshot('ListItem');
  });
});
