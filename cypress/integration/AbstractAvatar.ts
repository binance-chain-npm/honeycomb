describe('AbstractAvatar', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-abstractavatar--default', themeName: 'GoldLight' });
    cy.percySnapshot('AbstractAvatar with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-abstractavatar--default', themeName: 'GoldDark' });
    cy.percySnapshot('AbstractAvatar with Gold Dark theme');
  });
});
