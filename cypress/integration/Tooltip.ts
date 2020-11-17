describe('Tooltip', () => {
  it('renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-tooltip--mixed-themes', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Tooltip with mixed themes');

    cy.visitStory({ storyId: 'elements-tooltip--variants', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Tooltip');
  });
});
