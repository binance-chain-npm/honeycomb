describe('DynamicTextInput', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'inputs-dynamictextinput--default', themeId: 'GoldLight' });

    cy.get('[data-testid="input"]').clear();
    cy.get('[data-testid="input"]').type('Some really really really long text...');

    cy.percySnapshot('DynamicTextInput with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'inputs-dynamictextinput--default', themeId: 'GoldDark' });

    cy.get('[data-testid="input"]').clear();
    cy.get('[data-testid="input"]').type('Some really really really long text...');

    cy.percySnapshot('DynamicTextInput with Gold Dark theme', { widths: [800] });
  });
});
