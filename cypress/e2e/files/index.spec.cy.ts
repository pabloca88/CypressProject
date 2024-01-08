describe('Open the Bank App', () => {
  beforeEach('Click Manager login', () => {
    cy.visit('/')
    cy.contains('Bank Manager Login').click() 
    //cy.get('[class="btn btn-primary btn-lg"]').eq(1).click(); More than one ocurrence, choose 1st result
    //cy.get('[ng-click="manager()"]').click(); same as above sentence
  })

  it('Create Customer', ()=> {
    cy.log('Customer created')
  })

  it('Create an account', ()=> {
    cy.log('Account created')
  })

  it('Delete Customer', ()=> {
    cy.log('Customer Deleted')
  })
})