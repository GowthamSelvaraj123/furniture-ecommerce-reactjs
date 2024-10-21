import CartProduct from "../UI/cart/CartProduct";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function CartSection() {
  const navigate = useNavigate();
  const initialProducts = [
    { image: "/product-1.png", name: "Product 1", price: "49.00" },
    { image: "/product-1.png", name: "Product 2", price: "55.00" },
    { image: "/product-1.png", name: "Product 3", price: "60.00" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cartCounts, setCartCounts] = useState(products.map(() => 1));
  const [cartPrices, setCartPrices] = useState(products.map((product) => parseFloat(product.price) || 0));
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartPrices.reduce((acc, price) => acc + price, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  }, [cartPrices]);

  function incProduct(index) {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      updateProductPrice(index, newCounts[index]);
      return newCounts;
    });
  }

  function decProduct(index) {
    setCartCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
        updateProductPrice(index, newCounts[index]);
      }
      return newCounts;
    });
  }

  function updateProductPrice(index, quantity) {
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

  function remove(index) {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    setCartCounts((prevCounts) => prevCounts.filter((_, i) => i !== index));
    setCartPrices((prevPrices) => prevPrices.filter((_, i) => i !== index));
  }
  function proceedToCheckout() {
    const cartDetails = {
      products,
      cartCounts,
      cartPrices,
      subtotal,
      total,
    };
    navigate('/checkout', { state: cartDetails });
  }
  return (
    <>
      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartProduct
                      products={products}
                      cartCounts={cartCounts}
                      cartPrices={cartPrices}
                      incProduct={incProduct}
                      decProduct={decProduct}
                      remove={remove}
                    />
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${subtotal.toFixed(2)}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">${total.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block" onClick={proceedToCheckout}>Proceed To Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
