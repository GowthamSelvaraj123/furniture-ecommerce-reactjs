import ImgCard from "../UI/img-card/ImgCard";
export default function CardRepeater() {
    const cardDatas = [
        {image:'src/assets/product-1.png', title:'Nordic Chair', description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio', link:'#'},
        {image:'src/assets/product-2.png', title:'Kruzo Aero Chair', description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio', link:'#'},
        {image:'src/assets/product-3.png', title:'Ergonomic Chair', description:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio', link:'#'},
    ]
    return (
        <>
            <div class="popular-product">
                <div class="container">
                    <div class="row">

                        {cardDatas.map((cardData) => {
                            return (
                                <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                                    <ImgCard cardData={cardData}></ImgCard>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}