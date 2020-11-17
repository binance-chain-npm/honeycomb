describe('BuyWithMoonPay', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-buywithmoonpay--default', themeId: 'GoldLight' });
    cy.percySnapshot('BuyWithMoonPay');
  });
});
