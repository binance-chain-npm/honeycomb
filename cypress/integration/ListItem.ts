describe('ListItem', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-listitem--default', themeId: 'GoldLight' });
    cy.percySnapshot('ListItem');
  });
});
