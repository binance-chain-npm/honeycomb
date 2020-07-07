describe('ModalState', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-modalstate--default', themeId: 'GoldDark' });

    cy.tick(10000);

    cy.percySnapshot('ModalState with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.viewport(800, 600);
    cy.clock();
    cy.visitStory({ storyId: 'elements-modalstate--default', themeId: 'GoldLight' });

    cy.tick(10000);

    cy.percySnapshot('ModalState with Gold Light theme', { widths: [800] });
  });
});
