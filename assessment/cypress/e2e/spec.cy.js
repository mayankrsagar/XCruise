describe('xCruise Landing Page Tests', () => {
  beforeEach(() => {
    // Visit the xCruise home page before each test
    cy.visit('http://localhost:3000'); // Replace with the actual URL
  });

  it('Navigation Bar - should display the xCruise logo', () => {
    cy.get('.navbar .logo img').should('be.visible');
  });

  it('Navigation Bar - should have links to Home, Destinations, and Deals', () => {
    cy.get('.navbar .menu a').contains('Home').should('be.visible');
    cy.get('.navbar .menu a').contains('Destinations').should('be.visible');
    cy.get('.navbar .menu a').contains('Deals').should('be.visible');
  });

  it('Navigation Bar - should have a background color of #000033', () => {
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(0, 0, 51)');
  });

  it('Hero Section - should display the main heading', () => {
    cy.get('.hero h1').contains('DISCOVER THE BEAUTY OF CRUISING WITH US').should('be.visible');
  });

  it('Hero Section - should have a Book Now button', () => {
    cy.get('.hero button').contains('Book Now').should('be.visible');
  });

  it('Hero Section - should display the hero image as a background', () => {
    cy.get('.hero').should('have.css', 'background-image').and('include', 'hero-cruise.png');
  });

  it('Discover Section - should display the heading "DISCOVER OUR DESTINATIONS"', () => {
    cy.get('.discover .heading h2').contains('DISCOVER OUR DESTINATIONS').should('be.visible');
  });

  it('Discover Section - should display popular destinations with images', () => {
    cy.get('.discover .popular .pills div img').should('have.length', 3);
  });

  it('Discover Section - should have cards with a cursor pointer on hover', () => {
    cy.get('.discover .card').should('have.css', 'cursor', 'pointer');
  });

  it('Discover Section - popular pills should have a shadow', () => {
    cy.get('.discover .popular .pills > div').first().invoke('css', 'box-shadow').should('not.be.empty');
  });

  it('Footer Section - should display contact information', () => {
    cy.get('.footer').find('h3').contains('Contact Us').should('be.visible');
    cy.get('.footer').find('li').contains('New York City').should('be.visible');
  });

  it('Footer Section - should have a background color of #000033', () => {
    cy.get('footer').should('have.css', 'background-color', 'rgb(0, 0, 51)');
  });

  it('Footer Section - footer links should have a color of #fff (white)', () => {
    cy.get('footer a').each(($el) => {
      expect($el).to.have.css('color', 'rgb(255, 255, 255)');
    });
  });
});