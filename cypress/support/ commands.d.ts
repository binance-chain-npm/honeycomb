declare namespace Cypress {
  interface VisitStoryParams {
    storyId: string;
    themeName?: string;
  }

  interface Chainable<Subject> {
    visitStory(params: VisitStoryParams, options?: Partial<VisitOptions>): Chainable<Window>;
  }
}
