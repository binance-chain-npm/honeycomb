describe('CryptoAddress', () => {
  it('displays modal on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.modal.content"]').should('not.exist');

    cy.get('[data-testid="crypto-address.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.modal.content"]').should('be.visible');
    cy.get('[data-testid="crypto-address.tooltip.content"]').should('not.exist');

    cy.percySnapshot('CryptoAddress while open on a small device');
  });

  it('displays dropdown on large devices', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.modal.content"]').should('not.exist');
    cy.get('[data-testid="crypto-address.tooltip.content"]').should('be.visible');

    cy.percySnapshot('CryptoAddress while open on a large device', { widths: [800] });
  });

  it('displays formatted text', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--format', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="crypto-address-format.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="crypto-address-format.modal.content"]').should('not.exist');
    cy.get('[data-testid="crypto-address-format.tooltip.content"]').should('be.visible');

    cy.percySnapshot('CryptoAddress while open on a large device', { widths: [800] });
  });
});
