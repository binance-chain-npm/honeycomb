describe('PanelControl', () => {
  it('PanelControl orientation=horizontal renders correctly', () => {
    cy.visitStory({ storyId: 'elements-panelcontrol--horizontal', themeId: 'GoldLight' });

    cy.get('[data-testid="light.panel-control"]').should('be.visible');
    cy.get('[data-testid="light.panel-control.item.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="light.panel-control.item.1"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.item.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.item.disabled"]').should('be.disabled');

    cy.get('[data-testid="light.panel-control.item.1"]').click();
    cy.get('[data-testid="light.panel-control.item.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="light.panel-control.item.1"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="light.panel-control.item.2"]').should(
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
