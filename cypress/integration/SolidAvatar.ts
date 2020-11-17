describe('SolidAvatar', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-solidavatar--default', themeId: 'GoldLight' });
    cy.percySnapshot('SolidAvatar');
  });
});
