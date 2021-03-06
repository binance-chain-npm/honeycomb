describe('CryptoAddress', () => {
  it('displays modal on small screens', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--wrap', themeId: 'GoldLight' });

    cy.get('[data-testid="light.crypto-address.modal.content"]').should('not.exist');

    cy.get('[data-testid="light.crypto-address.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.crypto-address.modal.content"]').should('be.visible');
    cy.get('[data-testid="light.crypto-address.tooltip.content"]').should('not.exist');

    cy.percySnapshot('CryptoAddress while open on a small screen');
  });

  it('displays dropdown on large screens', () => {
    cy.customViewport({ size: 'lg' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--default', themeId: 'GoldLight' });

    cy.get('[data-testid="light.crypto-address.btn-scan-qr-code"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.crypto-address.modal.content"]').should('not.exist');
    cy.get('[data-testid="light.crypto-address.tooltip.content"]').should('be.visible');

    cy.percySnapshot('CryptoAddress while open on a large screen', { widths: [1280] });
  });

  it('displays formatted text correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-cryptoaddress--with-text', themeId: 'GoldLight' });

    cy.get('[data-testid="light.crypto-address.btn-copy"]').click();
    cy.tick(10000);

    cy.window()
    .its("navigator")
    .then((navigator) => {
      cy.stub(navigator.clipboard, "writeText").callsFake((value) => {
        expect(value).to.equal('bnb000000000000000000000000000000000000000');
      })
    });

    cy.get('[data-testid="light.crypto-address.address"]').should('have.text', '0xb00000...00000000');

    cy.percySnapshot('CryptoAddress displaying different text than the clipboard value');
  });
});
