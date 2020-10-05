describe('MnemonicPhrase', () => {
  it('renders correctly with GoldDark theme', () => {
    cy.visitStory({ storyId: 'tests-mnemonicphrase--default', themeId: 'GoldDark' });
    cy.percySnapshot('MnemonicPhrase with GoldDark');
  });

  it('renders correctly with GoldLight theme', () => {
    cy.visitStory({ storyId: 'tests-mnemonicphrase--default', themeId: 'GoldLight' });
    cy.percySnapshot('MnemonicPhrase with GoldLight');
  });
});
