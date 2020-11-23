describe('Select', () => {
  it('displays modal on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="dark.select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="dark.select.modal.content"]').should('be.visible');
    cy.get('[data-testid="dark.select.dropdown.content"]').should('not.exist');

    cy.percySnapshot('Select with Gold Dark theme while open on a small device');
  });

  it('displays dropdown on large devices', () => {
    cy.customViewport({ size: 'lg' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="dark.select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="dark.select.modal.content"]').should('not.exist');
    cy.get('[data-testid="dark.select.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Select with Gold Dark theme while open on a large device', { widths: [1280] });
  });

  it('search input not rendered when children are not filterable', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--non-filterable', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.input.native-input"]').should('not.exist');

    cy.get('[data-testid="non-filterable"]').should('be.visible');
    new Array(5).fill(null).forEach((_, index) => {
      cy.get(`[data-testid="select.modal.item.${index}"]`).should('exist');
    });
  });

  it('variant="dropdown" renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0"]').should('be.visible');
    cy.get('[data-testid="select.item.1"]').should('be.visible');
    cy.get('[data-testid="select.item.2"]').should('be.visible');

    cy.get('[data-testid="select.item.0"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.content"]').should('not.exist');

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.2.tick"]').should('not.exist');

    cy.percySnapshot('Select variant="dropdown"');
  });

  it('variant="modal" renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--modal', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0"]').should('be.visible');
    cy.get('[data-testid="select.item.1"]').should('be.visible');
    cy.get('[data-testid="select.item.2"]').should('be.visible');
    cy.get('[data-testid="select.item.photo"]').should('be.visible');

    cy.get('[data-testid="select.item.0"]').click();
    cy.tick(10000);
    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.2.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.input.native-input"]').type('crazy');

    cy.get('[data-testid="select.item.0"]').should('not.exist');
    cy.get('[data-testid="select.item.1"]').should('not.exist');
    cy.get('[data-testid="select.item.2"]').should('not.exist');
    cy.get('[data-testid="select.item.photo"]').should('be.visible');
    cy.get('[data-testid="select.item.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.item.photo"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.box"]').should('not.exist');

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.box"]').should('be.visible');
    cy.get('[data-testid="select.item.photo.tick"]').should('be.visible');

    cy.percySnapshot('Select variant="modal"');
  });
});
