describe('Header', () => {
  it('renders correctly on large screens', () => {
    cy.customViewport({ size: 'lg' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.header.logo.logo"]').should('be.visible');
    cy.get('[data-testid="light.header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="light.header.left"]').should('be.visible');
    cy.get('[data-testid="light.header.right"]').should('be.visible');
    cy.get('[data-testid="light.header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="light.header.menu"]').should('not.exist');
    cy.get('[data-testid="light.header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="light.header.left.dropdown.target"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.header.left.dropdown.content"]').should('be.visible');

    cy.percySnapshot('Header while open on a large screen', { widths: [1280] });
  });

  it('renders correctly on medium screens', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.header.logo.logo"]').should('be.visible');
    cy.get('[data-testid="light.header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="light.header.left"]').should('be.visible');
    cy.get('[data-testid="light.header.right"]').should('not.exist');
    cy.get('[data-testid="light.header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="light.header.menu"]').should('be.visible');
    cy.get('[data-testid="light.header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="light.header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="light.header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="light.header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="light.header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(4);
      });

    cy.percySnapshot('Header while open on a medium screen', { widths: [768] });
  });

  it('renders correctly on small screens', () => {
    cy.customViewport({ size: 'sm' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.header.logo.logo"]').should('not.exist');
    cy.get('[data-testid="light.header.logo.logo-sm"]').should('be.visible');
    cy.get('[data-testid="light.header.logo.badge"]').should('be.visible');

    cy.get('[data-testid="light.header.left"]').should('not.exist');
    cy.get('[data-testid="light.header.right"]').should('not.exist');
    cy.get('[data-testid="light.header.non-collapsible"]').should('be.visible');
    cy.get('[data-testid="light.header.menu"]').should('be.visible');
    cy.get('[data-testid="light.header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="light.header.menu"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.header.drawer.container"]').should('be.visible');
    cy.get('[data-testid="light.header.drawer.content"]').should('be.visible');
    cy.get('[data-testid="light.header.accordion"]').should('be.visible');
    
    cy.get('[data-testid="light.header.accordion"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(6);
      });

    cy.percySnapshot('Header while open on a small screen');
  });

  it('dropdown in header behaves correctly', () => {
    cy.customViewport({ size: 'lg' });
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });

    cy.get('[data-testid="light.header.left.dropdown.target"]').click();
    
    cy.get('[data-testid="light.header.left.dropdown.content"]')
      .children()
      .children()
      .then((children) => {
        expect(children.length).to.equal(7);
      });
  });

  it('dropdown in drawer behaves correctly', () => {
    cy.visitStory({ storyId: 'elements-header--with-complex-items', themeId: 'GoldLight' });

    cy.get('[data-testid="light.header.menu"]').click();
    cy.get('[data-testid="light.header.accordion.1"]').click();
    
    cy.get('[data-testid="light.header.accordion.1.children"]')
      .children()
      .then((children) => {
        expect(children.length).to.equal(4);
      });
  });

  it('clicking items in the drawer behaves correctly', () => {
    cy.get('[data-testid="light.header.accordion.0"]').click();

    cy.get('[data-testid="light.header.drawer.container"]').should('not.be.visible');

    cy.get('[data-testid="light.header.menu"]').click();
    cy.get('[data-testid="light.header.accordion.0"]').click();

    cy.get('[data-testid="light.header.drawer.container"]').should('not.be.visible');
  });

  it('non-collapsible items behave correctly', () => {
    cy.customViewport({ size: 'lg' });
    cy.visitStory({ storyId: 'elements-header--with-non-collapsible-items', themeId: 'GoldLight' });

    cy.get('[data-testid="light.header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible');
        expect(children[1]).to.have.attr('data-testid', 'light.non-collapsible.md');
        expect(children[2]).to.have.attr('data-testid', 'light.non-collapsible.sm');
      });
    cy.get('[data-testid="light.header.menu"]').should('not.exist');

    cy.customViewport({ size: 'md' });
    cy.reload();

    cy.get('[data-testid="light.header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible');
        expect(children[1]).to.have.attr('data-testid', 'light.non-collapsible.sm');
      });
    cy.get('[data-testid="light.header.menu"]').click();
    cy.get('[data-testid="light.header.accordion.1"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible.md');
      });

    cy.customViewport({ size: 'sm' });
    cy.reload();

    cy.get('[data-testid="light.header.non-collapsible"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible');
      });
    cy.get('[data-testid="light.header.menu"]').click();
    cy.get('[data-testid="light.header.accordion.2"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible.md');
      });
    cy.get('[data-testid="light.header.accordion.3"]')
      .children()
      .then((children) => {
        expect(children[0]).to.have.attr('data-testid', 'light.non-collapsible.sm');
      });
  });

  it('hamburger menu should not be shown if drawer has no elements', () => {
    cy.customViewport({ size: 'md' });
    cy.visitStory({ storyId: 'elements-header--default', themeId: 'GoldLight' });

    cy.get('[data-testid="light.header.menu"]').should('not.exist');
  });
});
