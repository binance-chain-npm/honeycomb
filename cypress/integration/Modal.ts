describe('Modal', () => {
  it('opens and closes', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="dark.btn-open"]').trigger('click');
    cy.tick(10000);
    cy.get('[data-testid="dark.modal"]').should('be.visible');

    cy.percySnapshot('Modal with Gold Dark theme');

    cy.get('[data-testid="dark.modal.header.close-btn"]').click();
    cy.tick(10000);
    cy.get('[data-testid="dark.modal"]').should('not.be.visible');
  });

  it('nested modal opens and closes', () => {
    cy.visitStory({ storyId: 'tests-modal--default', themeId: 'GoldLight' });

    cy.get('[data-testid="open-btn-outer"]').trigger('click');
    cy.get('[data-testid="modal-outer"]').should('be.visible');
    cy.get('[data-testid="modal-inner"]').should('not.exist');

    cy.get('[data-testid="open-btn-inner"]').trigger('click');
    cy.get('[data-testid="modal-outer"]').should('exist');
    cy.get('[data-testid="modal-outer"]').should('not.be.visible');
    cy.get('[data-testid="modal-inner"]').should('be.visible');

    cy.get('[data-testid="dropdown.target"]').click();
    cy.get('[data-testid="dropdown.option"]').should('be.visible');
    cy.get('body').click(0, 0);
    cy.get('[data-testid="dropdown.option"]').should('not.exist');

    cy.get('[data-testid="modal-inner"]').type('{esc}');
    cy.get('[data-testid="modal-outer"]').should('be.visible');
    cy.get('[data-testid="modal-inner"]').should('not.exist');

    cy.get('[data-testid="modal-outer.header.close-btn"]').click();
    cy.get('[data-testid="modal-outer"]').should('not.exist');
    cy.get('[data-testid="modal-inner"]').should('not.exist');
  });

  it('renders correctly with title', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--position-bottom', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Modal with title at position bottom');

    cy.visitStory({ storyId: 'elements-modal--small', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Small modal with title');
  });

  it('renders correctly with footer', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--with-footer', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Modal with footer');
  });

  it('renders correctly without title', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--without-title', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Modal without title');
  });

  it('renders correctly on medium screens', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();

    cy.visitStory({ storyId: 'elements-modal--without-title', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.percySnapshot('Modal while open on a medium screen', {
      widths: [768],
    });
  });
});
