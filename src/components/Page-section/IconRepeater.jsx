import Card from "../UI/icon-card/Card";
export default function IconRepeater()
{
  const cardLists = [
        {img:'/truck.svg', title:'Fast Free Shipping', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}, 
        {img:'/bag.svg', title:'Easy to Shop', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'/support.svg', title:'24/7 Support', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'/return.svg', title:'Hassle Free Returns', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'/truck.svg', title:'Fast Free Shipping', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}, 
        {img:'/bag.svg', title:'Easy to Shop', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'/support.svg', title:'24/7 Support', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},
        {img:'/return.svg', title:'Hassle Free Returns', description:'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'},]

  return(    
    <>
        <div class="why-choose-section">
        <div class="container">
                        <div className="row my-5">
                        {cardLists.map((cardList) => {
                            return(
                                <div className="col-6 col-md-6 col-lg-3 mb-4">
                                    <Card cardData={cardList}></Card>
                                </div>
                            )
                        })}
                    </div>
                    </div></div>
    </>
  );   
}