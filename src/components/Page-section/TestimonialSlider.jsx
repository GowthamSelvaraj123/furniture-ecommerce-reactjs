import Slider from "../UI/slider/Slider"
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function TestimonialSlider() {

    const sliderDatas = [
        { img: '/person-1.jpg', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.', author: 'Maria Jones', position: 'CEO, Co-Founder, XYZ Inc.' },
        { img: '/person-1.jpg', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.', author: 'Maria Jones', position: 'CEO, Co-Founder, XYZ Inc.' },
        { img: '/person-1.jpg', description: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.', author: 'Maria Jones', position: 'CEO, Co-Founder, XYZ Inc.' },
    ];
    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        loop:true, 
        controls: true,
        controlsText: ['<', '>']
    };
    return (
        <div class="testimonial-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-auto text-center">
                        <h2 class="section-title">Testimonials</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                <div class="col-lg-12">
						<div class="testimonial-slider-wrap text-center">
							<div class="testimonial-slider">
                        <TinySlider settings={settings}>
                            {sliderDatas.map((sliderData, index) => {
                                return (<Slider key={index} sliderData={sliderData}></Slider>)
                            })}
                        </TinySlider>
                        </div>
									</div>
                    </div>
                </div>
            </div>
        </div>
    )
}