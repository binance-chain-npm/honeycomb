describe('Space', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-space--default', themeName: 'GoldLight' });
    cy.percySnapshot('Space with Gold Light theme');
  });
});
