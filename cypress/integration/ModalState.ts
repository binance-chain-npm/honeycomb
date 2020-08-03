describe('ModalState', () => {
  it('renders correctly', () => {
    cy.clock();

    cy.visitStory({ storyId: 'elements-modalstate--success', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('ModalState (success) with Gold Light theme');

    cy.visitStory({ storyId: 'elements-modalstate--warning', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('ModalState (warning) with Gold Light theme');

    cy.visitStory({ storyId: 'elements-modalstate--danger', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('ModalState (danger) with Gold Light theme');

    cy.visitStory({ storyId: 'elements-modalstate--with-custom-icon', themeId: 'GoldLight' });
    cy.tick(10000);
    cy.percySnapshot('ModalState (custom icon) with Gold Light theme');
  });
});
