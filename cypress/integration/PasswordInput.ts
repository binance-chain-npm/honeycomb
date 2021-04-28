describe('PasswordInput', () => {
  it('renders a pristine component by default', () => {
    cy.visitStory({ storyId: 'inputs-passwordinput', themeId: 'GoldLight' });

    cy.percySnapshot('PasswordInput with invalid value in pristine state');
  });

  it('renders with "danger" styles after turning non-pristine', () => {
    cy.get('[data-testid="light.password-input.native-input"]').focus();

    cy.percySnapshot('PasswordInput with invalid value while focused');

    cy.get('[data-testid="light.password-input.native-input"]')
      .type('a{backspace}')
      .blur();

    cy.percySnapshot('PasswordInput with invalid value in non-pristine state');
  });

  it('password recommendations are shown by default', () => {
    cy.get('[data-testid="light.password-input.error-length"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol"]').should('be.visible');
  });

  it('password recommendation states change as they are met', () => {
    cy.get('[data-testid="light.password-input.native-input"]').type('thisissometext');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-cross"]').should('be.visible');

    cy.get('[data-testid="light.password-input.native-input"]').type('^');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="light.password-input.native-input"]').type('9');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="light.password-input.native-input"]').type('A');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-tick"]').should('be.visible');

    cy.percySnapshot('PasswordInput with valid value in non-pristine state');

    cy.get('[data-testid="light.password-input.native-input"]').type('{backspace}');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="light.password-input.native-input"]').type('{backspace}');

    cy.get('[data-testid="light.password-input.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="light.password-input.error-symbol-ic-tick"]').should('be.visible');
  });

  it('shows password content if toggle pressed', () => {
    cy.get('[data-testid="light.password-input.native-input"]')
      .clear()
      .type('this is some text');

    cy.get('[data-testid="light.password-input.native-input"]').should('have.attr', 'type', 'password');

    cy.get('[data-testid="light.password-input.toggle-show"]').click();
    cy.get('[data-testid="light.password-input.native-input"]').should('have.attr', 'type', 'text');

    cy.get('[data-testid="light.password-input.toggle-show"]').click();
    cy.get('[data-testid="light.password-input.native-input"]').should('have.attr', 'type', 'password');
  });
});
