import CartProduct from "../UI/cart/CartProduct";
import { useState, useEffect } from "react";

export default function CartSetcion() {
  const products = [
    {image:"/product-1.png", name:"Product 1", price:"49.00"}, 
    {image:"/product-1.png", name:"Product 2", price:"55.00"}, 
    {image:"/product-1.png", name:"Product 3", price:"60.00"}, 
  ];
  
const [cartCounts, setCartCounts] = useState(products.map(() => 1));
const [cartPrices, setCartPrices] = useState(products.map((product) => parseFloat(product.price) || 0));
const [subtotal, setSubtotal] = useState(0);
const [total, setTotal] = useState(0);

useEffect(() => {
  const newSubtotal = cartPrices.reduce((acc, price) => acc + price, 0);
  setSubtotal(newSubtotal);
  setTotal(newSubtotal); 
}, [cartPrices]);

function incProduct(index){
 setCartCounts((prevCounts) => {
    const newCounts = [...prevCounts];
    newCounts[index] += 1;
    updateProductPrice(index, newCounts[index])
    return newCounts;
 });
}
function decProduct(index)
{
    setCartCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] -= 1;
        updateProductPrice(index, newCounts[index])
        return newCounts;
     });
    
}
function updateProductPrice(index, quantity)
{
    setCartPrices((prevPrices) => {
        const newPrices = [...prevPrices];
        const basePrice = parseFloat(products[index].price);
        if (!isNaN(basePrice)) {
            newPrices[index] = basePrice * quantity;
        } else {
            console.error(`Invalid price for product at index ${index}:`, products[index].price);
            newPrices[index] = 0;
        }
        return newPrices;
    });
}
function inputChange()
{

}
  return (
    <>
      <div class="untree_co-section before-footer-section">
        <div class="container">
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-total">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                      <CartProduct products={products}
                      cartCounts={cartCounts} 
                      cartPrices={cartPrices} 
                      incProduct={incProduct} 
                      decProduct={decProduct}></CartProduct>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-6 mb-3 mb-md-0">
                  <button class="btn btn-black btn-sm btn-block">Update Cart</button>
                </div>
                <div class="col-md-6">
                  <button class="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label class="text-black h4" for="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div class="col-md-8 mb-3 mb-md-0">
                  <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div class="col-md-4">
                  <button class="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div class="col-md-6 pl-5">
              <div class="row justify-content-end">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-5">
                      <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <span class="text-black">Subtotal</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">${subtotal.toFixed(2)}</strong>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <span class="text-black">Total</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">${total.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button class="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}