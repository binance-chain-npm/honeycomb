describe('TextInput', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'tests-textinput--default', themeId: 'GoldLight' });

    cy.get('[data-testid="light.text-input.left"]').should('not.exist');
    cy.get('[data-testid="light.text-input.right"]').should('not.exist');

    const text = 'this is some text';
    cy.get('[data-testid="light.text-input.native-input"]').type(text);

    cy.percySnapshot('TextInput with text');

    cy.get('[id="light.value"]').should('have.text', text);
  });

  it('renders left and right components if props provided', () => {
    cy.visitStory({ storyId: 'tests-textinput--left-right', themeId: 'GoldLight' });

    cy.get('[data-testid="light.text-input.left"]')
      .should('be.visible')
      .children('[id="light.left-content"]')
      .should('exist');

    cy.get('[data-testid="light.text-input.right"]')
      .should('be.visible')
      .children('[id="light.right-content"]')
      .should('exist');
  });

  it('dynamic text input renders correctly', () => {
    cy.visitStory({ storyId: 'inputs-textinput--dynamic', themeId: 'GoldLight' });

    cy.get('[data-testid="light.input-giant.native-input"]').clear();
    cy.get('[data-testid="light.input-giant.native-input"]').type('Some really really really really really really long text...');

    cy.percySnapshot('Dynamic text input');
  });
});
