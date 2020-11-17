describe('MnemonicPhrase', () => {
  it('renders correctly', () => {
    cy.visitStory({ storyId: 'elements-mnemonicphrase--default', themeId: 'GoldLight' });
    cy.percySnapshot('MnemonicPhrase');
  });
});
