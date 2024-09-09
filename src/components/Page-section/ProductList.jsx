import Product from "../UI/Product/Product";
export default function ProductList() {
    const productLists = [
        {img:'src/assets/product-3.png', title:'Nordic Chair', price:'$50.00'}, 
        {img:'src/assets/product-1.png', title:'Nordic Chair', price:'$50.00'},
        {img:'src/assets/product-2.png', title:'Kruzo Aero Chair', price:'$78.00'},
        {img:'src/assets/product-3.png', title:'Ergonomic Chair', price:'$43.00'},
        {img:'src/assets/product-1.png', title:'Nordic Chair', price:'$50.00'},
        {img:'src/assets/product-3.png', title:'Ergonomic Chair', price:'$43.00'},
        {img:'src/assets/product-2.png', title:'Kruzo Aero Chair', price:'$78.00'},
        {img:'src/assets/product-1.png', title:'Nordic Chair', price:'$50.00'},
    ]
    return (
        <>
            <div class="untree_co-section product-section before-footer-section">
                <div class="container">
                    <div class="row">
                            {productLists.map((productList) => {
                                return(
                                <div class="col-12 col-md-4 col-lg-3 mb-5">
                                    <Product products={productList}></Product>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
        </>
    );
}