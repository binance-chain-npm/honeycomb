describe('Space', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-space--default', themeId: 'GoldLight' });
    cy.percySnapshot('Space with Gold Light theme');
  });
});
