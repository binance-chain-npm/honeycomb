describe('BuyWithMoonPay', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-buywithmoonpay--default', themeId: 'GoldLight' });
    cy.percySnapshot('BuyWithMoonPay with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-buywithmoonpay--default', themeId: 'GoldDark' });
    cy.percySnapshot('BuyWithMoonPay with Gold Dark theme');
  });
});
