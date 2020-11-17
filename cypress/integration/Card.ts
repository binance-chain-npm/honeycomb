describe('Card', () => {
  it('renders correct', () => {
    cy.visitStory({ storyId: 'elements-card--default', themeId: 'GoldLight' });
    cy.percySnapshot('Card');
  });
});
