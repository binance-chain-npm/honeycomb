describe('Icon', () => {
  it('renders all icons correctly', () => {
    cy.visitStory({ storyId: 'elements-icon--default', themeId: 'GoldLight' });
    cy.percySnapshot('Icons');
  });
});
