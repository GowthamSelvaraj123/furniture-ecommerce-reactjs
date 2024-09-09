import Card from "../UI/icon-card/Card";
export default function WhyChooseUs()
{
    const cardLists = [
        {img:'src/assets/truck.svg', title:'Fast Free Shipping', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}, 
        {img:'src/assets/bag.svg', title:'Easy to Shop', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'src/assets/support.svg', title:'24/7 Support', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'src/assets/return.svg', title:'Hassle Free Returns', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
    ]
    return(
        <div className="why-choose-section">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                    <h2 className="section-title">Why Choose Us</h2>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                    <div className="row my-5">
                        {cardLists.map((cardList) => {
                            return(
                                <div className="col-6 col-md-6">
                                    <Card cardData={cardList}></Card>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="img-wrap">
                        <img src="src/assets/why-choose-us-img.jpg" alt="Image" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    </div>

    );
}