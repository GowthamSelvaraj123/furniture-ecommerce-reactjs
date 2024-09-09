export default function Slider({ sliderData }) {
    return (
        <>
            <div class="item">
                <div class="row justify-content-center">
                    <div class="col-lg-8 mx-auto">

                        <div class="testimonial-block text-center">
                            <blockquote class="mb-5">
                                <p>{sliderData.description}</p>
                            </blockquote>

                            <div class="author-info">
                                <div class="author-pic">
                                    <img src={sliderData.img} alt="Maria Jones" class="img-fluid" />
                                </div>
                                <h3 class="font-weight-bold">{sliderData.author}</h3>
                                <span class="position d-block mb-3">{sliderData.position}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}