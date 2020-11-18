describe('Text', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-text--default', themeId: 'GoldLight' });
    cy.percySnapshot('Text');
  });
});
