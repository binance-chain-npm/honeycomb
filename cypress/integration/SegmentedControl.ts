describe('SegmentedControl', () => {
  it('works properly', () => {
    cy.visitStory({ storyId: 'elements-segmentedcontrol--default', themeId: 'GoldLight' });

    cy.get('[data-testid="segmented-control.huge"]').should('be.visible');
    cy.get('[data-testid="segmented-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="segmented-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="segmented-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.percySnapshot('SegmentedControl');

    cy.get('[data-testid="segmented-control.huge.1"]').click();
    cy.get('[data-testid="segmented-control.huge.0"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
    cy.get('[data-testid="segmented-control.huge.1"]').should(
      'have.attr',
      'data-testisselected',
      'true',
    );
    cy.get('[data-testid="segmented-control.huge.2"]').should(
      'have.attr',
      'data-testisselected',
      'false',
    );
  });
});
