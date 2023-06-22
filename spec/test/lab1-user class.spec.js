var User = require('../../lab1-user class')
describe("Testing User",function(){
    let user
    beforeEach(function(){
        user = new User("Yasmine",123456)
    })
     
    describe("Test addToCard function",function(){
        it("add Product to  Card",function(){
            let product ={
                name: "mobile",
                price: 1000
            }
            User.addToCart(product)
            expect(user.cart).toEqual([product])
        })
    })
    describe("Test calculateTotalCartPrice function",function(){
        it("retruns the cart array total price",function(){
            const productOne ={
                name:"mobile",
                price: 1000
            }
            const productTwo ={
                name:"TV",
                price: 500
            }
            user.addToCart(productOne)
            user.addToCart(productTwo)
            expect(user.calculateTotalCartPrice()).toBe(1500)
        })
    })
})
///////////////////////////////////////////////
    describe("Testing User",function(){
        let user
        beforeEach(function(){
            user = new User("Yasmine",123456)
        })
        describe("Test calculateTotalCartPrice function",function(){
            it("retruns the cart array total price",function(){
                const productOne ={
                    name:"mobile",
                    price: 1000
                }
                const productTwo ={
                    name:"TV",
                    price: 500
                }
                user.addToCart(productOne)
                user.addToCart(productTwo)
                expect(user.calculateTotalCartPrice()).toBe(1500)
            })
        })
        describe("checkout",function(){
            let paymentModel
            beforeEach(function(){
                paymentModel ={
                    goToVerifyPage: jasmine.createSpy("goToVerifyPage"),
                    returnBack: jasmine.createSpy("returnBack"),
                    isVerify: jasmine.createSpy("isVerify")
                }
            })
            it("call paymentModel methodes",function(){
                user.checkout(paymentModel)
                expect(paymentModel.goToVerifyPage).toHaveBeenCalled()
                expect(paymentModel.returnBack).toHaveBeenCalled()
                expect(paymentModel.isVerify).toHaveBeenCalled()
            })
            it("should retrun true if the payment is verified",function(){
                paymentModel.isVerify.and.returnValue(true)
                expect(paymentModel.checkout(paymentModel)).toBe(true)
            })
            it("should retrun false if the payment is verified",function(){
                paymentModel.isVerify.and.returnValue(false)
                expect(paymentModel.checkout(paymentModel)).toBe(false)
            })
        })
    })


