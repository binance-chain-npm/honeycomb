describe('Header', () => {
  it('renders correctly on large devices', () => {
    cy.viewport(1280, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('be.visible');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('not.exist');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.percySnapshot('Header while open on a large device', { widths: [1280] });
  });

  it('renders correctly on medium devices', () => {
    cy.viewport(768, 768);
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(3);
      });

    cy.percySnapshot('Header while open on a medium device', { widths: [768] });
  });

  it('renders correctly on small devices', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo"]').should('be.visible');
    cy.get('[data-testid="header.left"]').should('not.exist');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.exist');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(5);
      });

    cy.percySnapshot('Header while open on a small device');
  });
});
