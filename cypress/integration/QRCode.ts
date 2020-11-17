describe('QRCode', () => {
  it('renders without frame', () => {
    cy.visitStory({ storyId: 'elements-qrcode--default', themeId: 'GoldLight' });
    cy.percySnapshot('QRCode without frame');
  });

  it('renders with frame', () => {
    cy.visitStory({ storyId: 'elements-qrcode--with-frame', themeId: 'GoldLight' });
    cy.percySnapshot('QRCode with frame');
  });
});
