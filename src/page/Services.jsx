import HeroSection from "../components/UI/hero/HeroSection";
import TestimonialSlider from "../components/Page-section/TestimonialSlider";
import ThreeColumn from "../components/Page-section/ThreeColumn";
import IconRepeater from "../components/Page-section/IconRepeater";
export default function Services()
{
    return(
        <>
           <HeroSection title="Services" subtitle="" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."></HeroSection>
           <IconRepeater></IconRepeater>
           <ThreeColumn></ThreeColumn>
           <TestimonialSlider></TestimonialSlider>
        </>
    )
}