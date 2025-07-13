describe('Discount Tire Website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the main heading', () => {
    cy.get('h1')
    .contains('Trusted Tires & Auto Repair Shop');
  })

  it('displays the business name in header', () => {
    cy.get('.logo-text')
    .contains('Discount Tires & Auto');
  })

  it('shows navigation menu', () => {
    cy.get('.nav-menu')
    .should('be.visible');
    
    cy.get('.nav-menu a[href="#home"]')
    .should('contain', 'Home');
    
    cy.get('.nav-menu a[href="#services"]')
    .should('contain', 'Services');
    
    cy.get('.nav-menu a[href="#about"]')
    .should('contain', 'About');
    
    cy.get('.nav-menu a[href="#contact"]')
    .should('contain', 'Contact');
  })

  it('displays phone number', () => {
    cy.get('.phone-number')
    .contains('(250) 374-6956');
  })

  it('shows services section', () => {
    cy.get('#services')
    .should('be.visible');
    
    cy.get('#services h2')
    .contains('Our Services');
  })

  it('displays service cards', () => {
    cy.get('.service-card')
    .should('have.length.greaterThan', 0);
    
    cy.get('.service-card')
    .first()
    .should('contain', 'Tire Services');
  })

  it('shows about section', () => {
    cy.get('#about')
    .should('be.visible');
    
    cy.get('#about h2')
    .contains('About Discount Tires & Auto');
  })

  it('displays contact form', () => {
    cy.get('#contact')
    .should('be.visible');
    
    cy.get('#contact form')
    .should('be.visible');
    
    cy.get('input[name="firstName"]')
    .should('be.visible');
    
    cy.get('input[name="email"]')
    .should('be.visible');
  })

  it('shows footer with business info', () => {
    cy.get('.main-footer')
    .should('be.visible');
    
    cy.get('.main-footer')
    .contains('Discount Tires & Auto');
  })

  it('has responsive navigation toggle on mobile', () => {
    cy.viewport(375, 667); // Mobile viewport
    
    cy.get('.menu-toggle')
    .should('be.visible');
  })

  it('can fill out contact form', () => {
    cy.get('input[name="firstName"]')
    .type('John');
    
    cy.get('input[name="lastName"]')
    .type('Doe');
    
    cy.get('input[name="email"]')
    .type('john.doe@example.com');
    
    cy.get('input[name="phone"]')
    .type('(250) 123-4567');
    
    cy.get('select[name="service"]')
    .select('tire-service');
    
    cy.get('textarea[name="message"]')
    .type('I need new tires for my car.');
    
    // Check that submit button is enabled
    cy.get('.submit-btn')
    .should('not.be.disabled');
  })
})
