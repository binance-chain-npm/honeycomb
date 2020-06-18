describe('QRCode', () => {
  it('renders without frame', () => {
    cy.visitStory({ storyId: 'elements-qrcode--default', themeId: 'GoldLight' });
    cy.percySnapshot('QRCode without frame in Gold Light theme');
  });

  it('renders with frame', () => {
    cy.visitStory({ storyId: 'elements-qrcode--with-frame', themeId: 'GoldLight' });
    cy.percySnapshot('QRCode with frame in Gold Light theme');
  });
});
