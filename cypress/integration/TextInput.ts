describe('TextInput', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'tests-textinput--default', themeId: 'GoldDark' });

    cy.get('[data-testid="TextInput.left"]').should('not.exist');
    cy.get('[data-testid="TextInput.right"]').should('not.exist');

    const text = 'this is some text';
    cy.get('[data-testid="TextInput.native-input"]').type(text);

    cy.percySnapshot('TextInput with text');

    cy.get('#value').should('have.text', text);
  });

  it('renders left and right components if props provided', () => {
    cy.visitStory({ storyId: 'tests-textinput--left-right', themeId: 'GoldDark' });

    cy.get('[data-testid="TextInput.left"]')
      .should('be.visible')
      .children('#left-content')
      .should('exist');

    cy.get('[data-testid="TextInput.right"]')
      .should('be.visible')
      .children('#right-content')
      .should('exist');
  });

  it('<TextInput dynamic /> renders correctly', () => {
    cy.visitStory({ storyId: 'inputs-textinput--dynamic', themeId: 'GoldLight' });

    cy.get('[data-testid="input-giant.native-input"]').clear();
    cy.get('[data-testid="input-giant.native-input"]').type('Some really really really really really really long text...');

    cy.percySnapshot('<TextInput dynamic />', { widths: [375, 768] });
  });
});
