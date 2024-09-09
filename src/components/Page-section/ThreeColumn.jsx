import Product from "../UI/Product/Product"
import { Link } from "react-router-dom";

export default function ThreeColumn()
{
    const productLists = [
        {img:'/product-1.png', title:'Nordic Chair', price:'$50.00'}, 
        {img:'/product-2.png', title:'Kruzo Aero Chair', price:'$78.00'},
        {img:'/product-3.png', title:'Ergonomic Chair', price:'$43.00'},
    ]
    return(
        <div className="product-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                    <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                    <p><Link to="/shop" className="btn">Explore</Link></p>
                </div> 
                {productLists.map((productList) =>
            {
                return (<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                    <Product products={productList}></Product>
                </div>)
            })}
				</div>
			</div>
		</div>
    )
}