import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CheckoutForm() {
    const location = useLocation();
    const { state } = location;
    const [formData, setFormData] = useState({
        country: '',
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        address2: '',
        stateCountry: '',
        postalZip: '',
        email: '',
        phone: '',
        createAccount: false,
        accountPassword: '',
        shipDifferentAddress: false,
        diffCountry: '',
        diffFirstName: '',
        diffLastName: '',
        diffCompanyName: '',
        diffAddress: '',
        diffAddress2: '',
        diffStateCountry: '',
        diffPostalZip: '',
        diffEmail: '',
        diffPhone: '',
        orderNotes: '',
        couponCode: '',
        deliveryInstructions: ''
    });
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (state) {
            // Extract cart details from state
            const { products, total } = state;
            // Ensure that products and total are valid
            if (Array.isArray(products)) {
                setProducts(products.map(product => ({
                    ...product,
                    price: Number(product.price) || 0,
                    quantity: Number(product.quantity) || 0
                })));
            } else {
                setProducts([]);
            }
            setTotal(Number(total) || 0);
        }
    }, [state]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Order placed successfully!');
    };

    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="border p-4 rounded" role="alert">
                            Returning customer? <a href="#">Click here</a> to login
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <h2 className="h3 mb-3 text-black">Billing Details</h2>
                            <div className="p-3 p-lg-5 border bg-white">
                                <div className="form-group">
                                    <label htmlFor="country" className="text-black">Country <span className="text-danger">*</span></label>
                                    <select id="country" name="country" className="form-control" value={formData.country} onChange={handleChange}>
                                        <option value="">Select a country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName" className="text-black">First Name <span className="text-danger">*</span></label>
                                    <input type="text" id="firstName" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName" className="text-black">Last Name <span className="text-danger">*</span></label>
                                    <input type="text" id="lastName" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName" className="text-black">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" className="form-control" value={formData.companyName} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address" className="text-black">Address <span className="text-danger">*</span></label>
                                    <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address2" className="text-black">Address 2</label>
                                    <input type="text" id="address2" name="address2" className="form-control" value={formData.address2} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stateCountry" className="text-black">State / Country</label>
                                    <input type="text" id="stateCountry" name="stateCountry" className="form-control" value={formData.stateCountry} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="postalZip" className="text-black">Postal / ZIP Code <span className="text-danger">*</span></label>
                                    <input type="text" id="postalZip" name="postalZip" className="form-control" value={formData.postalZip} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-black">Email Address <span className="text-danger">*</span></label>
                                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                    <input type="text" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" id="createAccount" name="createAccount" className="form-check-input" checked={formData.createAccount} onChange={handleChange} />
                                    <label htmlFor="createAccount" className="form-check-label text-black">Create an account?</label>
                                </div>
                                {formData.createAccount && (
                                    <div className="form-group">
                                        <label htmlFor="accountPassword" className="text-black">Account Password</label>
                                        <input type="password" id="accountPassword" name="accountPassword" className="form-control" value={formData.accountPassword} onChange={handleChange} />
                                    </div>
                                )}
                                <div className="form-group form-check">
                                    <input type="checkbox" id="shipDifferentAddress" name="shipDifferentAddress" className="form-check-input" checked={formData.shipDifferentAddress} onChange={handleChange} />
                                    <label htmlFor="shipDifferentAddress" className="form-check-label text-black">Ship to a different address?</label>
                                </div>
                                {formData.shipDifferentAddress && (
                                    <div>
                                        <h4 className="h4 mb-3 text-black">Shipping Address</h4>
                                        <div className="form-group">
                                            <label htmlFor="diffCountry" className="text-black">Country</label>
                                            <input type="text" id="diffCountry" name="diffCountry" className="form-control" value={formData.diffCountry} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffFirstName" className="text-black">First Name</label>
                                            <input type="text" id="diffFirstName" name="diffFirstName" className="form-control" value={formData.diffFirstName} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffLastName" className="text-black">Last Name</label>
                                            <input type="text" id="diffLastName" name="diffLastName" className="form-control" value={formData.diffLastName} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffCompanyName" className="text-black">Company Name</label>
                                            <input type="text" id="diffCompanyName" name="diffCompanyName" className="form-control" value={formData.diffCompanyName} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffAddress" className="text-black">Address</label>
                                            <input type="text" id="diffAddress" name="diffAddress" className="form-control" value={formData.diffAddress} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffAddress2" className="text-black">Address 2</label>
                                            <input type="text" id="diffAddress2" name="diffAddress2" className="form-control" value={formData.diffAddress2} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffStateCountry" className="text-black">State / Country</label>
                                            <input type="text" id="diffStateCountry" name="diffStateCountry" className="form-control" value={formData.diffStateCountry} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffPostalZip" className="text-black">Postal / ZIP Code</label>
                                            <input type="text" id="diffPostalZip" name="diffPostalZip" className="form-control" value={formData.diffPostalZip} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffEmail" className="text-black">Email Address</label>
                                            <input type="email" id="diffEmail" name="diffEmail" className="form-control" value={formData.diffEmail} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="diffPhone" className="text-black">Phone</label>
                                            <input type="text" id="diffPhone" name="diffPhone" className="form-control" value={formData.diffPhone} onChange={handleChange} />
                                        </div>
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="orderNotes" className="text-black">Order Notes (Optional)</label>
                                    <textarea id="orderNotes" name="orderNotes" className="form-control" rows="5" value={formData.orderNotes} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="couponCode" className="text-black">Coupon Code</label>
                                    <input type="text" id="couponCode" name="couponCode" className="form-control" value={formData.couponCode} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="deliveryInstructions" className="text-black">Delivery Instructions</label>
                                    <textarea id="deliveryInstructions" name="deliveryInstructions" className="form-control" rows="5" value={formData.deliveryInstructions} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Place Order</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="border p-4 rounded mb-4">
                                <h2 className="h4 mb-3 text-black">Your Order</h2>
                                <ul className="list-unstyled">
                                    {products.map((product, index) => (
                                        <li key={index} className="d-flex justify-content-between align-items-center">
                                            <span>{product.name} x {product.quantity}</span>
                                            <span>${(product.price * product.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
