describe('MnemonicPhrase', () => {
  it('rends correctly with GoldDark theme', () => {
    cy.visitStory({ storyId: 'tests-mnemonicphrase--default' });
    cy.percySnapshot('MnemonicPhrase with GoldDark');
  });

  it('rends correctly with GoldLight theme', () => {
    cy.visitStory({ storyId: 'tests-mnemonicphrase--default', themeName: 'GoldLight' });
    cy.percySnapshot('MnemonicPhrase with GoldLight');
  });
});
