describe('TextInput', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'tests-textinput--default' });

    cy.get('[data-testid="TextInput.left"]').should('not.exist');
    cy.get('[data-testid="TextInput.right"]').should('not.exist');

    const text = 'this is some text';
    cy.get('[data-testid="TextInput.native-input"]').type(text);

    cy.percySnapshot('TextInput with text');

    cy.get('#value').should('have.text', text);
  });

  it('renders left and right components if props provided', () => {
    cy.visitStory({ storyId: 'tests-textinput--left-right' });

    cy.get('[data-testid="TextInput.left"]')
      .should('be.visible')
      .children('#left-content')
      .should('exist');

    cy.get('[data-testid="TextInput.right"]')
      .should('be.visible')
      .children('#right-content')
      .should('exist');
  });
});
