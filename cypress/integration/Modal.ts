describe('Modal', () => {
  it('opens and closes', () => {
    cy.visitStory({ storyId: 'elements-modal--behaviour', themeId: 'GoldDark' });

    cy.get('[data-testid="OpenButton"]').trigger('click');
    cy.get('[data-testid="MyModal.box"]').should('be.visible');

    cy.get('[data-testid="MyModal.close-btn"]').click();
    cy.get('[data-testid="MyModal.box"]').should('not.be.visible');
  });

  it('renders correctly with title', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--with-title', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('Modal with title with Gold Light theme');

    cy.visitStory({ storyId: 'elements-modal--with-title-at-bottom', themeId: 'GoldDark' });
    cy.tick(10000);
    cy.percySnapshot('Modal with title at bottom with Gold Dark theme');

    cy.visitStory({ storyId: 'elements-modal--small-with-title', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('Small modal with title with Gold Light theme');
  });

  it('renders correctly without title', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-modal--without-title', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('Modal without title with Gold Light theme');
  });

  it('renders correctly without title in big screens', () => {
    cy.viewport(800, 600);
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--without-title', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('Modal without title with Gold Light theme on a big screen', {
      widths: [800],
    });
  });
});
