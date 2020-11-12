describe('Button', () => {
  it('renders variants correctly', () => {
    cy.visitStory({ storyId: 'elements-button--default', themeId: 'GoldLight' });
    cy.percySnapshot('Idle buttons');
  });

  it('renders disabled variants correctly', () => {
    cy.visitStory({ storyId: 'elements-button--disabled', themeId: 'GoldLight' });
    cy.percySnapshot('Disabled buttons');
  });

  it('renders sizes correctly', () => {
    cy.visitStory({ storyId: 'elements-button--sizes', themeId: 'GoldLight' });
    cy.percySnapshot('Button sizes');
  });
});
