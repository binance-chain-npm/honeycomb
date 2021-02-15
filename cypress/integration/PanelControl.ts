describe('PanelControl', () => {
  it('PanelControl orientation=horizontal renders correctly', () => {
    cy.visitStory({ storyId: 'elements-panelcontrol--horizontal', themeId: 'GoldLight' });

    cy.get('[data-testid="light.panel-control"]').should('be.visible');
    cy.get('[data-testid="light.panel-control.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="light.panel-control.1"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.disabled"]').should('be.disabled');

    cy.get('[data-testid="light.panel-control.1"]').click();
    cy.get('[data-testid="light.panel-control.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.1"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="light.panel-control.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );

    cy.percySnapshot('PanelControl orientation=horizontal"');
  });

  it('PanelControl orientation=vertical renders correctly', () => {
    cy.visitStory({ storyId: 'elements-panelcontrol--vertical', themeId: 'GoldLight' });

    cy.percySnapshot('PanelControl orientation=vertical"');
  });
});
