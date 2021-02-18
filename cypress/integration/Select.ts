describe('Select', () => {
  it('displays modal on small screens', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="dark.select.default-target.caret-right"]').should('be.visible');
    cy.get('[data-testid="dark.select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="dark.select.modal.content"]').should('be.visible');
    cy.get('[data-testid="dark.select.dropdown.content"]').should('not.exist');

    cy.percySnapshot('Select with Gold Dark theme while open on a small screen');
  });

  it('displays dropdown on large screens', () => {
    cy.customViewport({ size: 'lg' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--responsive', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="dark.select.default-target.caret-down"]').should('be.visible');
    cy.get('[data-testid="dark.select.default-target.caret-up"]').should('not.exist');
    cy.get('[data-testid="dark.select.default-target.caret-right"]').should('not.exist');
    cy.get('[data-testid="dark.select.default-target"]').click();
    cy.tick(10000);
    cy.get('[data-testid="dark.select.default-target.caret-down"]').should('not.exist');
    cy.get('[data-testid="dark.select.default-target.caret-up"]').should('be.visible');

    cy.get('[data-testid="dark.select.modal.content"]').should('not.exist');
    cy.get('[data-testid="dark.select.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Select with Gold Dark theme while open on a large screen', { widths: [1280] });
  });

  it('search input not rendered when children are not filterable', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--non-filterable', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="non-filterable"]').should('be.visible');
    cy.get('[data-testid="select.input.native-input"]').should('not.exist');

    new Array(5).fill(null).forEach((_, index) => {
      cy.get(`[data-testid="select.${index}"]`).should('exist');
    });
  });

  it('variant="dropdown" renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.select.0"]').should('be.visible');
    cy.get('[data-testid="light.select.1"]').should('be.visible');
    cy.get('[data-testid="light.select.2"]').should('be.visible');

    cy.get('[data-testid="light.select.0"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.select.content"]').should('not.exist');

    cy.get('[data-testid="light.select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.select.0.tick"]').should('be.visible');
    cy.get('[data-testid="light.select.1.tick"]').should('not.exist');
    cy.get('[data-testid="light.select.2.tick"]').should('not.exist');

    cy.percySnapshot('Select variant="dropdown"');
  });

  it('variant="modal" renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--modal', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.0"]').should('be.visible');
    cy.get('[data-testid="select.1"]').should('be.visible');
    cy.get('[data-testid="select.2"]').should('be.visible');
    cy.get('[data-testid="select.photo"]').should('be.visible');

    cy.get('[data-testid="select.0"]').click();
    cy.tick(10000);
    cy.get('[data-testid="select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.2.tick"]').should('not.exist');
    cy.get('[data-testid="select.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.input.native-input"]').type('crazy');

    cy.get('[data-testid="select.0"]').should('not.exist');
    cy.get('[data-testid="select.1"]').should('not.exist');
    cy.get('[data-testid="select.2"]').should('not.exist');
    cy.get('[data-testid="select.photo"]').should('be.visible');
    cy.get('[data-testid="select.photo.tick"]').should('not.exist');

    cy.get('[data-testid="select.photo"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal"]').should('not.exist');

    cy.get('[data-testid="select.default-target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.modal"]').should('be.visible');
    cy.get('[data-testid="select.photo.tick"]').should('be.visible');

    cy.percySnapshot('Select variant="modal"');
  });
});
