describe('Icon', () => {
  it('renders all icons correctly', () => {
    cy.visitStory({ storyId: 'elements-icon--default', themeName: 'GoldDark' });
    cy.percySnapshot('Icons in Gold Dark theme');

    cy.visitStory({ storyId: 'elements-icon--default', themeName: 'GoldLight' });
    cy.percySnapshot('Icons in Gold Light theme');
  });
});
