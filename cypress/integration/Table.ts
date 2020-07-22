describe('Table', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-table--default', themeId: 'GoldLight' });
    cy.percySnapshot('Table with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-table--default', themeId: 'GoldDark' });
    cy.percySnapshot('Table with Gold Dark theme');
  });
});
