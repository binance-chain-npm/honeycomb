declare namespace Cypress {
  interface VisitStoryParams {
    storyId: string;
    themeId: 'GoldDark' | 'GoldLight' | 'SeaDark' | 'SeaLight';
  }

  interface CustomViewportParams {
    size: 'sm' | 'md' | 'lg';
  }

  interface Chainable<Subject> {
    visitStory(params: VisitStoryParams, options?: Partial<VisitOptions>): Chainable<Window>;
    customViewport(params: CustomViewportParams): Chainable<Window>;
  }
}
