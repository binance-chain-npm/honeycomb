describe('Button', () => {
  it('renders variants properly', () => {
    cy.visitStory({ storyId: 'elements-button--default', themeId: 'GoldDark' });
    cy.percySnapshot('Idle buttons');
  });

  it('renders disabled varaints properly', () => {
    cy.visitStory({ storyId: 'elements-button--disabled', themeId: 'GoldDark' });
    cy.percySnapshot('Disabled buttons');
  });
});
