describe('DynamicTextInput', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'inputs-dynamictextinput--default', themeId: 'GoldLight' });

    cy.get('[data-testid="input"]').clear();
    cy.get('[data-testid="input"]').type('Some really really really long text...');

    cy.percySnapshot('DynamicTextInput', { widths: [375, 800] });
  });
});
