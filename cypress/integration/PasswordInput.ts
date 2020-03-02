describe('PasswordInput', () => {
  it('shows password recommedations when focused', () => {
    cy.visitStory({ storyId: 'tests-passwordinput--default' });

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');

    cy.get('[data-testid="PasswordInput-native-input"]').click();

    cy.get('[data-testid="PasswordInput-error-length"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('be.visible');
  });

  it('removes password recommendations as they are met', () => {
    cy.get('[data-testid="PasswordInput-native-input"]').type('thisissometext');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('be.visible');

    cy.get('[data-testid="PasswordInput-native-input"]').type('^');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');

    cy.get('[data-testid="PasswordInput-native-input"]').type('9');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');

    cy.get('[data-testid="PasswordInput-native-input"]').type('A');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');

    cy.get('[data-testid="PasswordInput-native-input"]').type('{backspace}');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');

    cy.get('[data-testid="PasswordInput-native-input"]').type('{backspace}');

    cy.get('[data-testid="PasswordInput-error-length"]').should('not.exist');
    cy.get('[data-testid="PasswordInput-error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-digit"]').should('be.visible');
    cy.get('[data-testid="PasswordInput-error-symbol"]').should('not.exist');
  });

  it('shows password content if toggle pressed', () => {
    cy.get('[data-testid="PasswordInput-native-input"]')
      .clear()
      .type('this is some text');

    cy.get('[data-testid="PasswordInput-native-input"]').should('have.attr', 'type', 'password');

    cy.get('[data-testid="PasswordInput-toggle-show"]').click();
    cy.get('[data-testid="PasswordInput-native-input"]').should('have.attr', 'type', 'text');

    cy.get('[data-testid="PasswordInput-toggle-show"]').click();
    cy.get('[data-testid="PasswordInput-native-input"]').should('have.attr', 'type', 'password');
  });
});
