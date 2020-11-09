import '@percy/cypress';
import { encode } from 'querystring';

/* global Cypress, cy */

Cypress.Commands.add('visitStory', (params, options) => {
  const query = encode({ id: params.storyId, themeId: params.themeId });
  if (!!Cypress.env('CI')) {
    return cy.visit(`./storybook-static/iframe.html?${query}`, options);
  }

  return cy.visit(`http://localhost:6006/iframe.html?${query}`, options);
});

Cypress.Commands.add('customViewport', (params, options) => {
  if (params.size === 'sm') return cy.viewport(375, 660);
  if (params.size === 'md') return cy.viewport(768, 660);
  if (params.size === 'lg') return cy.viewport(1280, 660);

  return cy.viewport(params, options);
});
