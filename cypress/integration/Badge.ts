describe('Badge', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-badge--default', themeId: 'GoldLight' });
    cy.percySnapshot('Badge');
  });
});
