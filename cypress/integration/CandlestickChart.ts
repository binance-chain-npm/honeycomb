describe('CandlestickChart', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'charts-candlestickchart--default', themeName: 'GoldDark' });
    cy.percySnapshot('CandlestickChart with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'charts-candlestickchart--default', themeName: 'GoldLight' });
    cy.percySnapshot('CandlestickChart with Gold Light theme');
  });
});
