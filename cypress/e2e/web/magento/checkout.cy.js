describe("Checkout Magento", () => {
  it("Process Checkout", () => {

    /// Login
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Sign In").click();
    cy.get("#email",{timeout: 50000}).type("loremipsum@gmail.com");
    cy.get("#pass").type("lorem123@");
    cy.get(".action.login.primary",{timeout: 3000}).click();
    cy.url().should("include", "https://magento.softwaretestingboard.com/");
    cy.get(":nth-child(2) > .greet > .logged-in");

    /// Add product to cart 
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
    cy.url().should("include","https://magento.softwaretestingboard.com/radiant-tee.html");  
    cy.get("#option-label-size-143-item-168").click();
    cy.get("#option-label-color-93-item-57").click();
    cy.get("#qty").clear();
    cy.get("#qty").type("2");
    cy.contains("Add to Cart",{timeout  : 30000}).click();
    cy.get(".showcart",{timeout  : 50000}).click();
    cy.contains("You added Radiant Tee to your shopping cart.",{timeout  : 30000}).should( "be.visible");

    /// Checkout
    cy.wait(500)
    cy.get("#top-cart-btn-checkout", {timeout: 30000}).click({force:true});
    cy.get(".shipping-address-items", {timeout: 30000}).should("exist").then(($item) => {
      if($item.length > 0){
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
      }else{  
        cy.get('[name="company"]', {timeout: 30000}).type("Anis Company");
        cy.get('[name="street[0]"]').clear().type("Indonesia");
        cy.get('[name="street[1]"]').clear().type("Caringin ");
        cy.get('[name="street[2]"]').clear().type("Balandongan");
        cy.get('[name="city"]').type("Bogor");
        cy.get('[name="region_id"]').select("Florida");
        cy.get('[name="postcode"]').type("16730");
        cy.get('[name="country_id"]').select("United States");
        cy.get('[name="telephone"]').type("081234567890");        
      }
    });
    cy.get('.button.action.continue.primary').click();
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
  });
});
