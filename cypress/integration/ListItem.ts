describe('ListItem', () => {
  it('renders correctly', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-listitem--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('ListItem');
  });
});
