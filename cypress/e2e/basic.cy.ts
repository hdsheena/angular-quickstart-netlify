describe('Discount Tire Website', () => {
  beforeEach(() => {
    cy.visit('/')
    // Wait for Angular to load
    cy.get('app-root').should('exist')
  })

  it('loads the main page successfully', () => {
    cy.get('app-header').should('be.visible')
    cy.get('app-hero').should('be.visible')
    cy.get('app-services').should('be.visible')
    cy.get('app-about').should('be.visible')
    cy.get('app-contact').should('be.visible')
    cy.get('app-footer').should('be.visible')
  })

  it('displays the main heading', () => {
    cy.get('h1', { timeout: 10000 })
    .should('contain', 'Trusted Tires & Auto Repair Shop')
  })

  it('displays the business name in header', () => {
    cy.get('.logo-text', { timeout: 10000 })
    .should('contain', 'Discount Tires & Auto')
  })

  it('shows navigation menu items', () => {
    cy.get('.nav-menu', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('.nav-menu a').should('have.length.greaterThan', 0)
  })

  it('displays phone number in header', () => {
    cy.get('.phone-number span', { timeout: 10000 })
    .should('contain', '(250) 374-6956')
  })

  it('shows hero section with call-to-action', () => {
    cy.get('.hero-section', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('.primary-btn')
    .should('be.visible')
    .should('contain', 'Book Appointment')
  })

  it('displays services section', () => {
    cy.get('[id="services"]', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('.services-section h2')
    .should('contain', 'Our Services')
  })

  it('shows service cards', () => {
    cy.get('.service-card', { timeout: 10000 })
    .should('have.length.greaterThan', 0)
    
    // Check for tire services specifically
    cy.get('.service-card')
    .contains('Tire Services')
    .should('be.visible')
  })

  it('displays about section', () => {
    cy.get('[id="about"]', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('.about-section h2')
    .should('contain', 'About Discount Tires & Auto')
  })

  it('shows contact form', () => {
    cy.get('[id="contact"]', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('form', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('input[name="firstName"]')
    .should('be.visible')
    
    cy.get('input[name="email"]')
    .should('be.visible')
  })

  it('displays footer with business information', () => {
    cy.get('.main-footer', { timeout: 10000 })
    .should('be.visible')
    
    cy.get('.footer-content')
    .should('contain', 'Discount Tires & Auto')
  })

  it('has working contact form validation', () => {
    // Scroll to contact form and ensure it's fully visible
    cy.get('[id="contact"]').scrollIntoView({ offset: { top: -100, left: 0 } })
    
    // Wait a moment for scroll to complete
    cy.wait(500)
    
    // Try to submit empty form - button should be disabled
    cy.get('.submit-btn')
    .should('be.disabled')
    
    // Fill required fields with force option to avoid header overlap
    cy.get('input[name="firstName"]')
    .scrollIntoView()
    .type('John', { force: true })
    
    cy.get('input[name="lastName"]')
    .type('Doe', { force: true })
    
    cy.get('input[name="email"]')
    .type('john.doe@example.com', { force: true })
    
    cy.get('input[name="phone"]')
    .type('(250) 123-4567', { force: true })
    
    // Now submit button should be enabled
    cy.get('.submit-btn')
    .should('not.be.disabled')
  })

  it('is responsive on mobile devices', () => {
    cy.viewport(375, 667) // iPhone SE
    
    cy.get('.menu-toggle')
    .should('be.visible')
    
    // Test mobile menu toggle
    cy.get('.menu-toggle').click()
    cy.get('.nav-menu').should('have.class', 'active')
  })

  it('has proper page structure and semantic HTML', () => {
    // Check for proper semantic structure
    cy.get('header').should('exist')
    cy.get('main, section').should('have.length.greaterThan', 0)
    cy.get('footer').should('exist')
    
    // Check for heading hierarchy
    cy.get('h1').should('have.length.at.least', 1)
    cy.get('h2').should('have.length.greaterThan', 0)
  })
})
