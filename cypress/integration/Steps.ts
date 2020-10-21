describe('Steps', () => {
  it('<Steps orientation=horizontal /> renders correctly', () => {
    cy.visitStory({ storyId: 'elements-steps--horizontal', themeId: 'GoldLight' });
    cy.percySnapshot('<Steps orientation=horizontal />');
  });

  it('<Steps orientation=vertical /> renders correctly', () => {
    cy.visitStory({ storyId: 'elements-steps--vertical', themeId: 'GoldLight' });
    cy.percySnapshot('<Steps orientation=vertical />');
  });
});
