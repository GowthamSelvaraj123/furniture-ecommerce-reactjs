import Button from "../button/Button";
export default function HeroSection({title, subtitle, description})
{

return(<div className="hero">
<div className="container">
    <div className="row justify-content-between">
        <div className="col-lg-5">
            <div class="intro-excerpt">
                <h1>{title}<span class="d-block">{subtitle}</span></h1>
                <p class="mb-4">{description}.</p>
                <p><Button link="/shop" bootstrapClass="btn btn-secondary mr-2">Shop Now</Button><Button link="/shop" bootstrapClass="btn btn-white-outline">Explore</Button></p>
            </div>
        </div>
        <div className="col-lg-7">
            <div className="hero-img-wrap">
                <img src="src/assets/couch.png" className="img-fluid" />
            </div>
        </div>
    </div>
</div>
</div>);
}