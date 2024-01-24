describe('Open the Bank App', () => {
  beforeEach('Click Manager login', () => {
    cy.visit('/')
    cy.contains('Bank Manager Login').should('exist').click() 
    //cy.get('[class="btn btn-primary btn-lg"]').eq(1).click(); More than one ocurrence, choose 1st result
    //cy.get('[ng-click="manager()"]').click(); same as above sentence
  })

  it('Create Customer, Open Account and Process Currendy and Delete Customer', ()=> {
    cy.fixture('selectors').then((sel) => {
      cy.clickElement(sel.addCustomerBtn) // 'clickElement' created on commands.ts, 
      //it referrs to: cy.get(sel.addCustomerBtn).should('exist').click()

      cy.typeAText(sel.fistNameField,sel.firstName) //'typeAText'created on commands.ts, 
      //referrs to: cy.get(sel.fistNameField).should('exist').type(sel.firstName)

      cy.get(sel.lastNameField).should('exist').type(sel.lastName)
      cy.get(sel.pCodeField).should('exist').type(sel.postCd)
      cy.get(sel.createBtn).should('exist').click()
      cy.on('window:alert', (message) => {
        expect(["Customer added successfully with customer id :6", "Account created successfully with account Number :1016"]).
        to.contain(message) // we create a list of possible messages
      })
      //Validate Account Customer created
      cy.get(sel.openAccountBtn).should('exist').click()
      cy.get(sel.customerList).should('exist').select(sel.firstName + ' ' + sel.lastName)
      cy.get(sel.currencyList).should('exist').select(sel.currency)
      cy.get(sel.createBtn).should('exist').click()

      //Delete user created
      cy.get(sel.customerListBtn).should('exist').click()
      cy.get(sel.searchField).should('exist').type(sel.firstName)
      cy.get(sel.deleteBtn).should('exist').click()
    })
  })

  // it('Delete Customer', ()=> {
  //   cy.log('Customer Deleted')
  // })
})