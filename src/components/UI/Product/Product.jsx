export default function Product({ products }) {
    return (
        <>
            <a className="product-item" href="#">
                <img src={products.img} className="img-fluid product-thumbnail" />
                <h3 className="product-title">{products.title}</h3>
                <strong className="product-price">{products.price}</strong>
                <span className="icon-cross">
                    <img src="/assets/cross.svg" className="img-fluid" />
                </span>
            </a>
        </>
    )
}