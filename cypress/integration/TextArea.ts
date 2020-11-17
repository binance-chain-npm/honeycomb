describe('TextArea', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'inputs-textarea--text', themeId: 'GoldLight' });
    cy.percySnapshot('TextArea');
  });
});
