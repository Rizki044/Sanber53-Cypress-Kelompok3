import('../../../support/commands.js');

describe('Update Function',() => {
    beforeEach(() => {
        // Use baseUrl from cypress.config.js
        cy.login()
        cy.visit('/checkout/cart/')
    });

    it('Update Product', () => {
        cy.get('.action.update').click()
    })

    /// Edit product
    //it("Edit Product",() => {
           //})
    
    ///Delete product
    it("Delete Product", () => {
        ({
            url: 'https://magento.softwaretestingboard.com/checkout/cart/',
            type: 'post',
            data: 'remove=',
            dataType: 'json',
            success: function(json) {
                $('.success, .warning, .attention, .information').remove();
                if (json['emptyCart']) {
                    location.href="/checkout/cart/";
                }
                if (json['output']) {
                    $('#cart_total').html(json['4']);
                    $("table.total tr:last td:last").text(json['total'].split('-')[1]);
        
                    $('#cart .content').html(json['output']);
                }
            }
        });
        })
})