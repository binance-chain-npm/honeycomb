describe('AccountAvatar', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-accountavatar--default', themeName: 'GoldLight' });
    cy.percySnapshot('AccountAvatar with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-accountavatar--default', themeName: 'GoldDark' });
    cy.percySnapshot('AccountAvatar with Gold Dark theme');
  });
});
