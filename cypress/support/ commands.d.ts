declare namespace Cypress {
  interface VisitStoryParams {
    storyId: string;
    themeId: 'GoldDark' | 'GoldLight' | 'SeaDark' | 'SeaLight';
  }

  interface Chainable<Subject> {
    visitStory(params: VisitStoryParams, options?: Partial<VisitOptions>): Chainable<Window>;
  }
}
