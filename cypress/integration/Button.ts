describe('Button', () => {
  it('renders variants properly', () => {
    cy.visitStory({ storyId: 'elements-button--default' });
    cy.percySnapshot('Idle buttons');
  });

  it('renders disabled varaints properly', () => {
    cy.visitStory({ storyId: 'elements-button--disabled' });
    cy.percySnapshot('Disabled buttons');
  });
});
