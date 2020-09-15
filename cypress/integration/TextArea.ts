describe('TextArea', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'inputs-textarea--text', themeId: 'GoldDark' });
    cy.percySnapshot('TextArea');
  });
});
