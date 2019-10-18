import '@percy/cypress';
import { encode } from 'querystring';

/* global Cypress, cy */

Cypress.Commands.add('visitStory', (params, options) => {
  const query = encode({ id: params.storyId, theme: params.themeName });
  if (!!Cypress.env('CI')) {
    return cy.visit(`./storybook-static/iframe.html?${query}`, options);
  }

  return cy.visit(`http://localhost:6006/iframe.html?${query}`, options);
});
