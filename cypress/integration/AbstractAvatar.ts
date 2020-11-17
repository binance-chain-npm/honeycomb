describe('AbstractAvatar', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-abstractavatar--default', themeId: 'GoldLight' });
    cy.percySnapshot('AbstractAvatar');
  });
});
