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
    cy.viewport(768, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.modal.content"]').should('not.exist');
    cy.get('[data-testid="crypto-address.tooltip.content"]').should('be.visible');

    cy.percySnapshot('CryptoAddress while open on a large device', { widths: [800] });
  });

  it('displays formatted text correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--format', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="crypto-address.btn-copy"]').click();
    cy.tick(10000);

    cy.window()
    .its("navigator")
    .then((navigator) => {
      cy.stub(navigator.clipboard, "writeText").callsFake((value) => {
        expect(value).to.equal('bnb000000000000000000000000000000000000000');
      })
    });

    cy.get('[data-testid="crypto-address.address"]').should('have.text', '0xb38784***e967Ece49');

    cy.percySnapshot('CryptoAddress displaying different text than the clipboard value');
  });
});
