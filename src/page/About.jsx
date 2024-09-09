import HeroSection from "../components/UI/hero/HeroSection";
import WhyChooseUs from "../components/Page-section/WhyChooseus";
import TestimonialSlider from "../components/Page-section/TestimonialSlider";
import OurTeam from "../components/Page-section/OurTeam";
export default function About()
{
    return(
        <>
            <HeroSection title="About Us" subtitle="" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."></HeroSection>
            <WhyChooseUs></WhyChooseUs>
            <OurTeam></OurTeam>
            <TestimonialSlider></TestimonialSlider>
        </>
    )
}