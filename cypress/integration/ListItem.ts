describe('ListItem', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'elements-listitem--default', themeId: 'GoldLight' });
    cy.percySnapshot('ListItem');
  });
});
