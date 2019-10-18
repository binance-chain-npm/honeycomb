describe('TextInput', () => {
  it('exposes value when typing', () => {
    cy.visitStory({ storyId: 'tests-textinput--default' });

    const text = 'this is some text';
    cy.get('[data-testid="TextInput-native-input"]').type(text);

    cy.percySnapshot('TextInput with text');

    cy.get('#value').should('have.text', text);
  });
});
