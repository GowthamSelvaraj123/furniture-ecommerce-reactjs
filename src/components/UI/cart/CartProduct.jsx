export default function CartProduct({ products, cartCounts, cartPrices, incProduct, decProduct }) {
    return (
        <>
            {products.map((product, index) => (
                <tr key={product.id}>
                    <td className="product-thumbnail">
                        <img src={product.image} alt="Image" className="img-fluid" />
                    </td>
                    <td className="product-name">
                        <h2 className="h5 text-black">{product.name}</h2>
                    </td>
                    <td>{`$${product.price}`}</td>
                    <td>
                        <div className="input-group mb-3 d-flex align-items-center quantity-container">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-black decrease" type="button" onClick={() => decProduct(index)}>-</button>
                            </div>
                            <input 
                                type="text" 
                                className="form-control text-center quantity-amount" 
                                value={cartCounts[index]} 
                                readOnly 
                                aria-label="Example text with button addon" 
                                aria-describedby="button-addon1" 
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-black increase" type="button" onClick={() => incProduct(index)}>+</button>
                            </div>
                        </div>
                    </td>
                    <td>{`$${cartPrices[index].toFixed(2)}`}</td>
                    <td><a href="#" className="btn btn-black btn-sm">Remove</a></td>
                </tr>
            ))}
        </>
    );
}
