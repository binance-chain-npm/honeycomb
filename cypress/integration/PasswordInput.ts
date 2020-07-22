describe('PasswordInput', () => {
  it('renders a pristine component by default', () => {
    cy.visitStory({ storyId: 'tests-passwordinput--default', themeId: 'GoldDark' });

    cy.percySnapshot('PasswordInput with invalid value in pristine state');
  });

  it('renders with "danger" styles after turning non-pristine', () => {
    cy.get('[data-testid="PasswordInput.native-input"]').focus();

    cy.percySnapshot('PasswordInput with invalid value while focused');

    cy.get('[data-testid="PasswordInput.native-input"]')
      .type('a{backspace}')
      .blur();

    cy.percySnapshot('PasswordInput with invalid value in non-pristine state');
  });

  it('password recommendations are shown by default', () => {
    cy.get('[data-testid="PasswordInput.error-length"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol"]').should('be.visible');
  });

  it('password recommendation states change as they are met', () => {
    cy.get('[data-testid="PasswordInput.native-input"]').type('thisissometext');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-cross"]').should('be.visible');

    cy.get('[data-testid="PasswordInput.native-input"]').type('^');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="PasswordInput.native-input"]').type('9');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="PasswordInput.native-input"]').type('A');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-tick"]').should('be.visible');

    cy.percySnapshot('PasswordInput with valid value in non-pristine state');

    cy.get('[data-testid="PasswordInput.native-input"]').type('{backspace}');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-tick"]').should('be.visible');

    cy.get('[data-testid="PasswordInput.native-input"]').type('{backspace}');

    cy.get('[data-testid="PasswordInput.error-length-ic-tick"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-upper-case-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-digit-ic-cross"]').should('be.visible');
    cy.get('[data-testid="PasswordInput.error-symbol-ic-tick"]').should('be.visible');
  });

  it('shows password content if toggle pressed', () => {
    cy.get('[data-testid="PasswordInput.native-input"]')
      .clear()
      .type('this is some text');

    cy.get('[data-testid="PasswordInput.native-input"]').should('have.attr', 'type', 'password');

    cy.get('[data-testid="PasswordInput.toggle-show"]').click();
    cy.get('[data-testid="PasswordInput.native-input"]').should('have.attr', 'type', 'text');

    cy.get('[data-testid="PasswordInput.toggle-show"]').click();
    cy.get('[data-testid="PasswordInput.native-input"]').should('have.attr', 'type', 'password');
  });
});
