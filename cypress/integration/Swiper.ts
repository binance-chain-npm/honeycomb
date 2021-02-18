describe('Swiper', () => {
  const checkSm = ({ theme, index }: {
    theme: 'accent' | 'light' | 'dark',
    index: number,
  }) => {
    cy.get(`[data-testid="${theme}.swiper.pagination"]`)
    .children()
    .then((children) => {
      children[index].click();

      cy.get(`[data-testid="${theme}.swiper.${index}.label"]`).should('be.visible');
      cy.get(`[data-testid="${theme}.swiper.${index}.label"]`).should('have.text', index + 1);
    });
  };

  it('renders correctly on small screens', () => {
    cy.customViewport({ size: 'sm' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-swiper--default', themeId: 'GoldLight' });

    checkSm({
      theme: 'accent',
      index: 0,
    })
    checkSm({
      theme: 'dark',
      index: 1,
    })
    checkSm({
      theme: 'light',
      index: 4,
    })
    cy.tick(10000);

    cy.percySnapshot('Swiper while open on a small screen');
  });

  it('renders correctly on medium screens', () => {
    cy.customViewport({ size: 'md' });
    cy.clock();
    cy.visitStory({ storyId: 'elements-swiper--default', themeId: 'GoldLight' });

    cy.get('[data-testid="accent.swiper.btn-next"]').should('be.visible');
    cy.get('[data-testid="accent.swiper.btn-prev"]').should('not.be.visible');

    cy.get('[data-testid="dark.swiper.btn-next"]').click();
    cy.tick(10000);
    cy.get('[data-testid="dark.swiper.btn-next"]').should('be.visible');
    cy.get('[data-testid="dark.swiper.btn-prev"]').should('be.visible');

    for (let i = 0; i < 3; i++) {
      cy.get('[data-testid="light.swiper.btn-next"]').click();
      cy.tick(10000);
    }
    cy.get('[data-testid="light.swiper.btn-next"]').should('not.be.visible');
    cy.get('[data-testid="light.swiper.btn-prev"]').should('be.visible');

    cy.percySnapshot('Swiper while open on a medium screen', { widths: [768] });
  });
});
