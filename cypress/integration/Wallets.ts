describe('Wallets', () => {
  it('renders correctly on different sized screens', () => {
    cy.customViewport({ size: 'sm' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-wallets--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.wallets.item.0"]').click();
    cy.get('[data-testid="light.wallets.item.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );

    cy.percySnapshot('Wallets while open on a small screen');

    cy.customViewport({ size: 'md' });
    cy.reload();
    cy.tick(10000);

    cy.get('[data-testid="light.wallets.item.0"]').click();
    cy.get('[data-testid="light.wallets.item.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );

    cy.percySnapshot('Wallets while open on a medium screen', { widths: [768] });
  });

  it('custom providers and number of columns renders correctly', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-wallets--with-custom-wallet-provider', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.wallets"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(6);
      });

    cy.percySnapshot('Wallets with custom providers and columns', { widths: [768] });
  });
});
