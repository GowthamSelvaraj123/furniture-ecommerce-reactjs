export default function ImgCard({ cardData }) {
    return (
        <>
            <div class="product-item-sm d-flex">
                <div class="thumbnail">
                    <img src={cardData.image} alt="Image" class="img-fluid" />
                </div>
                <div class="pt-3">
                    <h3>{cardData.title}</h3>
                    <p>{cardData.description}</p>
                    <p><a href={cardData.link}>Read More</a></p>
                </div>
            </div>
        </>
    );
}