describe('Modal', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-modal--default', themeName: 'GoldDark' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('Modal with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-modal--default', themeName: 'GoldLight' });

    cy.clock();
    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.tick(10000);

    cy.percySnapshot('Modal with Gold Light theme', { widths: [800] });
  });
});
