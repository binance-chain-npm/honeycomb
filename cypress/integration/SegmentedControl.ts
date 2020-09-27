describe('SegmentedControl', () => {
  it('<SegmentedControl variant="buttons" /> renders correctly', () => {
    cy.visitStory({ storyId: 'elements-control--segmented-control', themeId: 'GoldLight' });

    cy.get('[data-testid="buttons-control.huge"]').should('be.visible');
    cy.get('[data-testid="buttons-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="buttons-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="buttons-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.percySnapshot('<SegmentedControl variant="buttons" />');

    cy.get('[data-testid="buttons-control.huge.1"]').click();
    cy.get('[data-testid="buttons-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="buttons-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="buttons-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
  });

  it('<SegmentedControl variant="tab" /> renders correctly', () => {
    cy.visitStory({ storyId: 'elements-control--tab-control', themeId: 'GoldLight' });

    cy.percySnapshot('<SegmentedControl variant="tab" />');
  });
});
