describe('Header', () => {
  it('renders correctly on large devices', () => {
    cy.customViewport({ size: 'lg' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo.logo"]').should('be.visible');
    cy.get('[data-testid="header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('be.visible');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('not.exist');
    cy.get('[data-testid="header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="header.left.dropdown.target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.left.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Header while open on a large device', { widths: [1280] });
  });

  it('renders correctly on medium devices', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo.logo"]').should('be.visible');
    cy.get('[data-testid="header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('be.visible');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(4);
      });

    cy.percySnapshot('Header while open on a medium device', { widths: [768] });
  });

  it('renders correctly on small devices', () => {
    cy.customViewport({ size: 'sm' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="header.logo.logo"]').should('not.exist');
    cy.get('[data-testid="header.logo.logo-sm"]').should('be.visible');
    cy.get('[data-testid="header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="header.left"]').should('not.exist');
    cy.get('[data-testid="header.right"]').should('not.exist');
    cy.get('[data-testid="header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="header.menu"]').should('be.visible');
    cy.get('[data-testid="header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(6);
      });

    cy.percySnapshot('Header while open on a small device');
  });

  it('dropdown in header behaves correctly', () => {
    cy.customViewport({ size: 'lg' });
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });

    cy.get('[data-testid="header.left.dropdown.target"]').click();
    
    cy.get('[data-testid="header.left.dropdown.content"]')
      .children()
      .children()
      .then((children) => {
        expect(children.length).to.equal(7);
      });
  });

  it('dropdown in drawer behaves correctly', () => {
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });

    cy.get('[data-testid="header.menu"]').click();
    cy.get('[data-testid="header.accordion.1"]').click();
    
    cy.get('[data-testid="header.accordion.1.children"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(4);
      });
  });

  it('clicking items in the drawer behaves correctly', () => {
    cy.get('[data-testid="header.accordion.0"]').click();

    cy.get('[data-testid="header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="header.menu"]').click();
    cy.get('[data-testid="header.accordion.0"]').click();

    cy.get('[data-testid="header.drawer.container"]').should('not.be.visible');
  });

  it('non-collapsible items behave correctly', () => {
    cy.customViewport({ size: 'lg' });
    cy.visitStory({ storyId: 'elements-header--with-non-collapsible-items', themeId: 'GoldLight' });

    cy.get('[data-testid="header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible');
        expect(children[1]).to.have.attr('data-testid', 'non-collapsible.md');
        expect(children[2]).to.have.attr('data-testid', 'non-collapsible.sm');
      });
    cy.get('[data-testid="header.menu"]').should('not.exist');

    cy.customViewport({ size: 'md' });
    cy.reload();

    cy.get('[data-testid="header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible');
        expect(children[1]).to.have.attr('data-testid', 'non-collapsible.sm');
      });
    cy.get('[data-testid="header.menu"]').click();
    cy.get('[data-testid="header.accordion.1"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible.md');
      });

    cy.customViewport({ size: 'sm' });
    cy.reload();

    cy.get('[data-testid="header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible');
      });
    cy.get('[data-testid="header.menu"]').click();
    cy.get('[data-testid="header.accordion.2"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible.md');
      });
    cy.get('[data-testid="header.accordion.3"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'non-collapsible.sm');
      });
  });
});
